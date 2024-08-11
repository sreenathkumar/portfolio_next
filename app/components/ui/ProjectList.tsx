'use client';

import { ProjectType } from "@/app/lib/types";
import { useEffect, useState } from "react";
import SingleProject from "./SingleProject";
import Slide from "./Slide";
import Slider from "./Slider";

function ProjectList({ projects }: { projects: ProjectType[] }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Initialize on mount
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {
                projects.length > 0 ?
                    isMobile ? (
                        <Slider>
                            {projects.map((project) => (
                                <Slide key={project._id}>
                                    <SingleProject project={project} />
                                </Slide>
                            ))}
                        </Slider>
                    ) : (
                        <div className="grid grid-cols-3 gap-4 mb-12">
                            {projects.map((project) => (
                                <SingleProject key={project._id} project={project} />
                            ))}
                        </div>
                    )
                    : <div className="flex justify-center items-center h-64">
                        <p className="text-lg text-accent">No projects found</p>
                    </div>
            }
        </>
    );
};

export default ProjectList