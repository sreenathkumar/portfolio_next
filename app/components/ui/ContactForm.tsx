
function ContactForm() {
    return (<>
        <h2 className='font-heading text-[2rem] mb-6 text-center text-neutral-0'>Let’s Build Something Awesome Together!</h2>
        <form className="max-w-sm mx-auto w-full">
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-0 dark:text-neutral-0">Your name</label>
                <input type="name" id="name" className="bg-primary border border-gray-300 text-neutral-0 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-neutral-0 dark:focus:ring-accent dark:focus:border-accent" placeholder='Sreenath Kumar' required />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-0 dark:text-neutral-0">Your email</label>
                <input type="email" id="email" className="bg-primary border border-gray-300 text-neutral-0 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-neutral-0 dark:focus:ring-accent dark:focus:border-accent" placeholder="name@gmail.com" required />
            </div>
            <div className="mb-5">
                <label htmlFor="query" className="block mb-2 text-sm font-medium text-neutral-0 dark:text-neutral-0">Your query</label>
                <textarea id="query" className="bg-primary border border-gray-300 text-neutral-0 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-neutral-0 dark:focus:ring-accent dark:focus:border-accent" placeholder='Please, share what is in your mind!' required />
            </div>

            <button type="submit" className="text-accent hover:bg-accent hover:text-secondary border-2 border-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-cente dark:hover:bg-accent">Submit</button>
        </form>
    </>

    )
}

export default ContactForm