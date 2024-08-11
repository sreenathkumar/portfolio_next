import React from 'react'
import expertiseColumnMaker from '../lib/expertiseColumn';

function Expertise() {
    const skillSet: string[] = ['JavaScripts', 'React.js', 'Node.js', 'Redux.js', 'TypeScript', 'Tailwind CSS', 'Python', 'Wordpress', 'Woocommerce',];
    return (
        <div className="block overflow-hidden px-6 mb-28 md:mb-32 md:max-w-xl md:mx-auto" id="expertise">
            <div>
                <div className="flex mb-10 md:mb-14 items-center">
                    <h3 className='text-2xl font-heading text-neutral-0 md:text-[2rem]'>My Expertise</h3>
                    <span className="w-5/12 bg-neutral-100 h-[1px] ml-4"></span>
                </div>

                <div className="relative">
                    <p className="text-base font-para text-neutral-100 mb-10">
                        I am a dedicated and aspiring learner, committed to continuous improvement. While I am in the process of honing my skills, I have already gained valuable expertise in WordPress, enabling me to create dynamic and customizable websites. Beyond WordPress, I possess a foundational understanding of various coding languages. I am enthusiastic about contributing my evolving skills and knowledge, and I look forward to embracing new challenges and opportunities for growth in my journey ahead.
                    </p>
                    <span className="vl"></span>
                    <div className="md:gap-[72px] md:flex md:flex-wrap">
                        {expertiseColumnMaker(skillSet, 3)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise