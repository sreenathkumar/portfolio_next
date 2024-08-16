'use client';
import { sleep } from '@/app/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);

    function onDismiss() {
        setOpenModal(false);
        sleep(300).then(() => router.back());
    }

    useEffect(() => {
        setOpenModal(true);
    }, []);

    return createPortal(
        <div className='fixed bottom-0 left-0 z-20 w-full px-10'>
            <AnimatePresence>
                {openModal && <motion.div
                    initial={{ opacity: 0, height: 0, originY: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className='flex flex-col text-neutral-100 rounded-t-lg p-6 mx-auto bg-secondary cursor-pointer md:w-3/5 md:p-10'>
                    <svg onClick={onDismiss} xmlns="http://www.w3.org/2000/svg" className='ml-auto mb-6' width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06" /><path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0" /></g></svg>
                    {
                        children
                    }
                </motion.div>}
            </AnimatePresence>
        </div>
        ,
        document.getElementById('modal-root')!
    );
}