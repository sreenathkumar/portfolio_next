import { Montserrat, Inter } from "next/font/google";


export const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-heading'
});

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-paragraph',
})