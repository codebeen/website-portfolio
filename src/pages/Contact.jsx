import { useEffect, useRef } from "react";
import SectionLayout from "../layouts/SectionLayout";

function Contact() {
    const ctaRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fadeInUp");
                }
            },
            { threshold: 0.1 },
        );

        if (ctaRef.current) {
            observer.observe(ctaRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <SectionLayout id="contact">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                            Contact
                        </p>
                        <h2 className="font-display mt-3 text-3xl text-white sm:text-4xl">
                            Let us build the next release together.
                        </h2>
                        <p className="mt-4 text-base text-white/70">
                            Share a few details and I will respond immediately.
                        </p>
                    </div>
                    <div ref={ctaRef} className="frame space-y-4">
                        <a
                            href="mailto:darbenlamonte@gmail.com"
                            className="block w-full rounded-xl bg-[var(--accent-500)] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[var(--accent-600)]"
                        >
                            Send an email
                        </a>
                        <a
                            href="https://linkedin.com/in/darben/"
                            target="_blank"
                            rel="noreferrer"
                            className="block w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-white/30"
                        >
                            Connect on LinkedIn
                        </a>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                            Typically replies within 24 hours.
                        </p>
                    </div>
                </div>
            </SectionLayout>
        </>
    );
}

export default Contact;
