'use client'
import { disableScroll, enableScroll, smoothScroll } from '@/app/lib/smoothScroll';
import { animate, motion } from 'framer-motion';
import { use, useEffect, useState } from 'react';


function MenuItem({ text }: { text: string }) {
    //const scrollContainer: HTMLElement | null = document?.getElementById('root');
    const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null);

    // Add event listener to navigation links or any element that triggers scrolling
    const handleClick = (e: React.MouseEvent, target: string) => {
        e.preventDefault();// diabling default scroll behavior

        const scrolledAmount = scrollContainer?.scrollTop;
        const targetElement: HTMLElement | null = document.getElementById(target);
        const targetPosition = targetElement && targetElement.getBoundingClientRect().top + window.scrollY;
        let goToTarget = 0;

        if (targetPosition !== null && scrolledAmount !== undefined) {
            goToTarget = targetPosition + scrolledAmount - 152;
        }

        disableScroll();
        smoothScroll(goToTarget);
        enableScroll()
    }

    useEffect(() => {
        setScrollContainer(document.getElementById('root'));
    }, []);


    return (
        <motion.li
            whileHover={{ scale: 1.2, }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={(e) => handleClick(e, text.toLowerCase())}
            className="text-base font-para md:font-medium py-2 block border-accent text-neutral-0 cursor-pointer relative">
            {text}
        </motion.li>
    )
}

export default MenuItem