
import ContactForm from '../components/ui/ContactForm'

function ContactPage() {
    return (
        <main className=" contact-page relative h-full w-full flex flex-col justify-between items-center p-0 m-0">
            <section className='w-full h-full flex flex-col py-20 gap-10 md:container md:flex-row md:items-center md:gap-[96px]'>
                <div className='flex flex-col px-4'>
                    <h1 className='font-heading text-neutral-0 text-3xl font-extrabold text-center md:text-left md:text-[4rem] md:leading-[76px] md:font-bold'>Let&apos;s Connect</h1>
                    <p className='font-para text-base text-neutral-100 text-center mt-8 max-w-[600px] md:text-left md:text-[1.25rem] md:leading-[32px]'>If you’re interested in working together, have a project in mind, or just want to chat about web development, don’t hesitate to reach out. I’m always open to new opportunities and would love to hear from you!</p>
                </div>
                <div className='bg-primary p-6 rounded md:max-w-md md:w-full md:p-12 '>
                    <ContactForm />
                </div>

            </section>
        </main>
    )
}

export default ContactPage