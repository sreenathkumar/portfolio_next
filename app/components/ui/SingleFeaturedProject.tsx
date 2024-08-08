import { ProjectType } from "@/app/lib/types";
import Image from "next/image";

export default function SingleFeaturedProject({ project, index }: { project: ProjectType, index: number }) {
    const maxLength = 220;
    let subDes = project.description.length > maxLength ? project.description.substring(0, maxLength) + "..." : project.description

    return (
        <div className={`project_item grid_${(index + 1) % 2 === 0 ? 'even' : 'odd'} min-h-[352px] relative mb-8 md:mb-10 rounded-lg grid grid-cols-12`}>
            <div className="project_image w-full h-full col-span-full row-span-full">
                <span className="overlay h-full w-full bg-primary absolute top-0 left-0 opacity-85"></span>
                <a className="h-full md:h-auto md:relative block" href={project.url} target="_blank" rel="noreferrer" >
                    <Image src={project.image} className="h-full w-full rounded-lg" width={656} height={502} alt={project.title} />
                </a>
            </div>
            <div className="relative flex flex-col z-10 h-full p-6 col-span-full row-span-full md:relative md:h-auto md:p-0">
                <p className="font-medium">{project.subtitle}</p>
                <h2 className="font-heading text-accent text-[2rem] mb-6">{project.title}</h2>
                <p className="text-neutral-0 font-para text-base mb-6">
                    {subDes}
                </p>
                <div className="flex justify-between items-center gap-3 flex-wrap mt-auto md:pt-10">
                    <div className="">
                        <a href={project.url} target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 19.207 19.207"
                                className="stroke-neutral-100 stroke-1 fill-none">
                                <g transform="translate(0.5 0.707)">
                                    <path
                                        d="M18.75,13.542v6.25a2.083,2.083,0,0,1-2.083,2.083H5.208a2.083,2.083,0,0,1-2.083-2.083V8.333A2.083,2.083,0,0,1,5.208,6.25h6.25"
                                        transform="translate(-3.125 -3.875)" />
                                    <path d="M15.625,3.125h6.25v6.25" transform="translate(-3.875 -3.125)" />
                                    <path d="M10.417,14.583,21.875,3.125" transform="translate(-3.875 -3.125)" />
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className="tags flex flex-wrap gap-3">
                        {
                            project.tags.map((tag, index) => (
                                <span key={tag} className=" font-para text-xs text-accent">{tag}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}