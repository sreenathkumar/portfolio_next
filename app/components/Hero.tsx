import AnimatedButton from "./ui/AnimatedButton"

function Hero() {
    return (
        <section className="text-center my-48 md:mb-32 px-6 md:text-left md:mx-auto md:max-w-[896px] md:container md:px-6" id="hero">
            <span className="text-neutral-100 block mb-4 font-normal font-para md:mb-10">Hello, I am</span>
            <h1 className='text-neutral-0 text-3xl font-extrabold font-heading mb-4 md:text-[3.5rem] md:mb-8'>Sreenath Kumar</h1>
            <h2 className='text-neutral-100 text-3xl mb-6 font-extrabold font-heading md:text-[3.5rem] md:mb-10'>I make Web Beautiful.</h2>
            <p className='px-6 mb-10 text-neutral-100 font-para md:text-left md:px-0 md:pr-4 md:max-w-3xl'>
                I am a Frontend website developer. I specialize in creating visually appealing, user-friendly websites that are optimized for performance and search engines. Whether you need a new website or assistance with customization, I&#39;m here to deliver outstanding results. Let&#39;s collaborate and bring your online presence to life!
            </p>
            <AnimatedButton link='https://www.fiverr.com/sreenath_kumar' text='Get In Touch' target="_blank" />
        </section>
    )
}

export default Hero