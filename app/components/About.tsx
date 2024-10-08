import Image from "next/image"


function About({ photo }: any) {
    return (
        <section className="flex flex-wrap flex-col px-6 mb-28 md:container md:px-6 md:mx-auto md:grid md:grid-flow-col md:max-w-[896px]" id="about">
            <div className="md:pr-10 ">
                <div className="flex mb-10 md:mb-14 items-center">
                    <h3 className='text-2xl font-heading text-neutral-0 md:text-[2rem]'>About Me</h3>
                    <div className="h-[1px] bg-neutral-100 w-5/12 ml-4 md:w-1/2"></div>
                </div>
                <div className="text-base font-para text-neutral-100 md:max-w-[536px]">
                    <p>
                        Greetings! I&#39;m Sreenath Kumar, a dedicated B.Sc. Mathematics student at BSMRSTU and a passionate Frontend Developer. My expertise lies in crafting captivating user interfaces and seamless experiences using JavaScript, React.js, Tailwind CSS, and TypeScript.
                    </p>
                    <p>With a strong foundation in mathematics and a flair for coding, I&#39;m committed to creating visually appealing and functional websites. My journey involves continuous exploration of new frontend technologies, ensuring I stay at the forefront of web development trends.
                    </p>
                    <p>
                        While my primary focus is frontend development, I also possess extra expertise in WordPress, allowing me to create dynamic and customizable websites that marry design with functionality.
                    </p>
                    <span className="vl"></span>
                </div>
            </div>
            <div className="photo mt-10 mb-4 mx-auto relative">
                <div className="frame absolute top-4 -left-4 -z-10 border-2 border-accent h-72 w-full rounded"></div>
                <Image className='h-72 w-full rounded relative' src={photo?.url} width={284} height={284} alt={photo?.alt} />
                <div className="overlay absolute top-0 left-0 bg-accent opacity-40 h-72 w-full rounded"></div>
            </div>
        </section>
    )
}

export default About