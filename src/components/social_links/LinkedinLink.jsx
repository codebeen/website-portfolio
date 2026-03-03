function LinkedinLink() {
    return (
        <a
            href="https://linkedin.com/in/darben/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0A66C2] transition-all hover:scale-105"
            aria-label="LinkedIn profile"
            data-aos="fade-up"
            data-aos-delay={700}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
            >
                <path d="M8 11v5"></path>
                <path d="M8 8v.01"></path>
                <path d="M12 16v-5"></path>
                <path d="M16 16v-3a2 2 0 1 0 -4 0"></path>
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
            </svg>
        </a>
    );
}

export default LinkedinLink;