function EmailLink() {
    return (
        <a
            href="mailto:darbenlamonte@gmail.com"
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#5865F2] transition-all hover:scale-105"
            aria-label="Send email"
            data-aos="fade-up"
            data-aos-delay={800}
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
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
            </svg>
        </a>
    );
}

export default EmailLink;