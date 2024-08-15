import ContactForm from "@/app/components/ui/ContactForm"
import { Modal } from "@/app/components/ui/Modal"

function InterceptedContactPage() {

    return (
        <Modal>
            <h2 className='font-heading text-[2rem] mb-6 text-center text-neutral-0'>Let’s Build Something Awesome Together!</h2>
            <ContactForm />
        </Modal>
    )
}

export default InterceptedContactPage