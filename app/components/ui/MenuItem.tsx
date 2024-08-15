'use client';
import { useScroll } from '@/app/hooks/useScroll';
import { sleep } from '@/app/lib/utils';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

function MenuItem({ text }: { text: string }) {
    const pathname = usePathname();
    const router = useRouter();
    const scrollToTarget = useScroll();

    const handleClick = async (e: React.MouseEvent, target: string) => {
        e.preventDefault(); // Disable default anchor behavior

        // Check if we are on a different page, then navigate and scroll
        if (pathname !== '/') {
            router.push(`/`);
            sleep(300).then(() => {
                scrollToTarget(target);
            });
        }

        scrollToTarget(target);
    };

    return (
        <motion.li
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={(e) => handleClick(e, text.toLowerCase())}
            className="text-base font-para md:font-medium py-2 block border-accent text-neutral-0 cursor-pointer relative">
            {text}
        </motion.li>
    );
}

export default MenuItem;
