import { useEffect, useRef, useState } from "react";
import SectionLayout from "../layouts/SectionLayout";

function Contact() {
    const ctaRef = useRef(null);
    const [copyState, setCopyState] = useState("idle");
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

    useEffect(() => {
        if (copyState === "idle") {
            return undefined;
        }

        const timer = setTimeout(() => setCopyState("idle"), 2200);
        return () => clearTimeout(timer);
    }, [copyState]);

    return (
        <>
            <SectionLayout id="contact">
                <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div data-aos="fade-up" delay={100}>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                            Contact
                        </p>
                        <h2 className="font-display mt-3 text-2xl text-white sm:text-3xl lg:text-4xl">
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
                        <button
                            type="button"
                            onClick={async () => {
                                try {
                                    await navigator.clipboard.writeText(
                                        emailAddress,
                                    );
                                    setCopyState("copied");
                                } catch (error) {
                                    setCopyState("failed");
                                }
                            }}
                            onMouseLeave={() => setCopyState("idle")}
                            onBlur={() => setCopyState("idle")}
                            className="block cursor-pointer w-full rounded-xl bg-[var(--accent-500)] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[var(--accent-600)]"
                        >
                            {copyState === "copied"
                                ? "Email copied"
                                : "Copy email"}
                        </button>
                        <p className="sr-only" aria-live="polite">
                            {copyState === "copied"
                                ? "Email address copied to clipboard"
                                : copyState === "failed"
                                  ? "Unable to copy email address"
                                  : ""}
                        </p>
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
            {copyState !== "idle" && (
                <div
                    role="status"
                    aria-live="polite"
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                >
                    {copyState === "copied" ? (
                        <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-emerald-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.704 5.293a1 1 0 0 1 .003 1.414l-7.125 7.2a1 1 0 0 1-1.428.006L3.29 9.126a1 1 0 1 1 1.42-1.408l3.16 3.186 6.414-6.488a1 1 0 0 1 1.42-.123z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-rose-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm2.707-10.707a1 1 0 0 0-1.414-1.414L10 7.172 8.707 5.879a1 1 0 1 0-1.414 1.414L8.586 8.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 10l1.293 1.293a1 1 0 0 0 1.414-1.414L11.414 8.586l1.293-1.293z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                    <span>
                        {copyState === "copied"
                            ? "Email copied to clipboard"
                            : "Unable to copy email"}
                    </span>
                </div>
            )}
        </>
    );
}

export default Contact;
