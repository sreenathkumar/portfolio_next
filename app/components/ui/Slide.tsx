import { motion } from 'framer-motion'

function Slide({ children, width, ...props }: { children: React.ReactNode, width?: number, }) {
    return (
        <motion.div style={{ width: `${width}px`, flexShrink: 0 }} className="scale-[0.7]">{children}</motion.div>
    )
}

export default Slide