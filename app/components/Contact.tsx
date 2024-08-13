import AnimatedButton from './ui/AnimatedButton'

function Contact() {
    return (
        <div className='px-6 mb-28 md:mb-32 md:px-20 md:max-w-[686px] md:mx-auto' id='contact'>
            <div className="flex flex-col justify-center items-center">
                <p className="font-para text-base text-accent mb-4">Wanna Have a conversation?</p>
                <h2 className='mb-5 font-heading text-neutral-0 text-[32px] md:text-[4rem]'>Get in Touch</h2>
                <p className='mb-10 font-para text-base text-neutral-100 text-center'>
                    Ready to bring your ideas to life? Let&#39;s collaborate and create something exceptional together. Whether you need a captivating website, an engaging user interface, or a seamless user experience, I&#39;m here to make it happen. Reach out today and let&#39;s start building!
                </p>
                <AnimatedButton link='/contact' text='Send a ❤' />
            </div>
        </div>
    )
}

export default Contact