'use client'
import { motion } from 'framer-motion'


function MenuItem({ text }: { text: string }) {
    return (
        <motion.li
            initial={{ borderBottomWidth: 0, }}
            whileHover={{ borderBottomWidth: 1, }}
            transition={{ duration: 0.5 }}
            className={`text-base font-para md:font-medium py-2 block border-accent text-neutral-0`} >{text}</motion.li>
    )
}

export default MenuItem