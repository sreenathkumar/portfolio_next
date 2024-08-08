

function AnimatedButton({ link, text }: { link: string, text: string }) {
    return (
        <a className="animated-button bg-transparent font-base font-para text-accent px-6 py-4 border border-accent rounded inline-block mx-auto" href={link}>{text}</a>
    )
}

export default AnimatedButton