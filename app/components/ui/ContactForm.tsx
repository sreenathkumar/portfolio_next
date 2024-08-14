'use client';
import { sendEmail } from "@/actions/handleMails"
import FormField from "@/app/contact/components/FormField"
import { FormEvent, useState } from "react";
import Status from "./Status";

function ContactForm() {
    const [status, setStatus] = useState<{ status: string | null, message: string | null }>({
        status: null,
        message: null
    });
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus({
            status: 'pending',
            message: 'Sending your message...'
        });

        const res = await sendEmail(new FormData(e.target as HTMLFormElement));
        if (res) {
            setStatus(res)
        } else {
            setStatus({
                status: 'error',
                message: 'Failed to send'
            })
        }
    }
    return (<>
        <h2 className='font-heading text-[2rem] mb-6 text-center text-neutral-0'>Let’s Build Something Awesome Together!</h2>
        <form className="max-w-sm mx-auto w-full" onSubmit={handleSubmit}>
            {status.status && <Status text={status.message} type={status.status} />}
            <FormField label="Your name" htmlFor="name">
                <input type="text" className="bg-primary border border-gray-300 text-neutral-0 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-neutral-0 dark:focus:ring-accent dark:focus:border-accent" placeholder='Sreenath Kumar' required />
            </FormField>

            <FormField htmlFor="email" label="Your Email Address">
                <input type="email" name="email" className="bg-primary border border-gray-300 text-neutral-0 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-neutral-0 dark:focus:ring-accent dark:focus:border-accent" placeholder="name@gmail.com" required />
            </FormField>
            <FormField htmlFor="query" label="Your Query">
                <textarea id="query" name="message" className="bg-primary border border-gray-300 text-neutral-0 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-neutral-0 dark:focus:ring-accent dark:focus:border-accent" placeholder='Please, share what is in your mind!' required />
            </FormField>

            <button type="submit" disabled={status.status === 'pending'} className="text-accent hover:bg-accent hover:text-secondary border-2 border-accent font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-cente dark:hover:bg-accent">Submit</button>
        </form >
    </>

    )
}

export default ContactForm