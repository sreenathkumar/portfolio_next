import React, { Suspense } from 'react'
import AnimatedButton from './ui/AnimatedButton'
import { getAllProjects } from '@/api/queries'
import PostSkeleton from './ui/PostSkeleton';
import ProjectList from './ui/ProjectList';

async function AllProjects() {
    const projects = await getAllProjects();
    return (
        <div className='flex flex-col justify-center px-6 mb-28 md:mb-32 md:px-20' id='projects'>
            <div className="flex flex-col justify-center items-center mb-10">
                <h3 className='font-heading text-neutral-0 text-2xl md:text-[2rem]'>Other Projects</h3>
                <p className='text-base font-para text-accent'>It&#39;s fun to explore</p>
            </div>
            <Suspense fallback={<PostSkeleton />}>
                <ProjectList projects={projects} />
            </Suspense>
            <AnimatedButton link='https://github.com/sreenathkumar' text='See All' />
        </div>
    )
}

export default AllProjects