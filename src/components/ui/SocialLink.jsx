export const SocialLink = ({ href, ariaLabel, children, delay }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 items-center gap-2 rounded-lg border border-white/20 bg-transparent px-3 text-white/60 transition-all hover:border-white/50 hover:text-white hover:bg-white/5"
            aria-label={ariaLabel}
            data-aos="fade-up"
            data-aos-delay="200"
        >
            {children}
        </a>
    );
}