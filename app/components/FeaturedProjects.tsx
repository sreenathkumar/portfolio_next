import { getFeaturedProjects } from '@/actions/sanityQueries';
import { Suspense } from 'react';
import { ProjectType } from '../lib/types';
import PostSkeleton from './ui/PostSkeleton';
import SingleFeaturedProject from './ui/SingleFeaturedProject';

async function FeaturedProjects() {
    const featuredProjects = await getFeaturedProjects();

    return (
        <section className='container px-6 mb-28 mx-auto lg:px-20' id="featured">
            <div className="flex mb-10 items-center">
                <h3 className='font-heading text-2xl text-neutral-0 md:text-[2rem]'>Client&#39;s Projects</h3>
                <div className="w-5/12 bg-neutral-100 h-[1px] ml-4"></div>
            </div>
            <div className="md:flex md:flex-col">
                <Suspense fallback={<PostSkeleton />}>
                    {
                        featuredProjects.map((project: ProjectType, index: number) => (<SingleFeaturedProject key={project._id} project={project} index={index} />))
                    }
                </Suspense>
            </div>
        </section>
    )
}

export default FeaturedProjects