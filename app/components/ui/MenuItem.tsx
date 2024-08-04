'use client'
import { Roboto_Mono } from 'next/font/google'
const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap'
});

function MenuItem({ text }: { text: string }) {
    return (
        <li className={`text-base md:font-medium py-2 block text-accent ${roboto_mono.className}`} >{text}</li>
    )
}

export default MenuItem