import { useEffect, useRef } from "react";
import SectionLayout from "../../components/layouts/SectionLayout.jsx";

function ContactSection() {
    const ctaRef = useRef(null);
    const emailAddress = "darbenlamonte@gmail.com";

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
                    <div data-aos="fade-up" delay={100}>
                        <p className="text-xs font-semibold uppercase text-blue-500 tracking-[0.3em]">
                            Contact
                        </p>
                        <h2 className="font-display mt-3 text-3xl text-white sm:text-4xl">
                            Let us build the next release together.
                        </h2>
                        <p className="mt-4 text-base text-white/70">
                            Share a few details and I will respond immediately.
                        </p>
                    </div>
                    <div
                        ref={ctaRef}
                        className="frame space-y-4"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >
                        <a
                            href={`mailto:${emailAddress}`}
                            className="block cursor-pointer w-full rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            Send me an email
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

export default ContactSection;
