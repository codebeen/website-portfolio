function ContactSection() {
    return (
        <div className="mt-16 frame text-center">
            <h3 className="font-display text-2xl text-white">
                Let's Work Together
            </h3>
            <p className="mt-3 text-base text-white/70">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                    href="mailto:darbenlamonte@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                >
                    Send me an email
                </a>
                <a
                    href="https://linkedin.com/in/darben/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                >
                    Connect on LinkedIn
                </a>
            </div>
        </div>
    );
}

export default ContactSection;