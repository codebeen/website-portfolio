import { TypeAnimation } from "react-type-animation";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";

function Hero () {
    return (
        <>
            <section
                id="home"
                className="mx-auto max-w-6xl px-4 py-20 sm:py-28"
            >
                <div className="grid gap-10 lg:grid-cols-1 lg:items-center w-full">
                    <div className="reveal">
                        <span className="rounded-full bg-[var(--accent-400)]/20 px-3 py-1 text-xs font-semibold text-[var(--accent-400)]">
                            Open to work!
                        </span>
                        {/* <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                            Software Engineer Portfolio 2026
                        </p> */}
                        <div className="flex flex-col gap-6 w-full sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h1 className="font-display mt-4 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                                    Hey, I'm Darben
                                </h1>
                                <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-mono mt-3">
                                    <TypeAnimation
                                        sequence={[
                                            "a software engineer.",
                                            2000,
                                            "a backend specialist.",
                                            2000,
                                            "a dreamer.",
                                            2000,
                                            "a builder.",
                                            2000,
                                        ]}
                                        wrapper="span"
                                        cursor={true}
                                        repeat={Infinity}
                                        style={{ display: "inline-block" }}
                                    />
                                </p>
                            </div>

                            <div className="flex justify-center sm:justify-end">
                                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-blue-500/30 ring-offset-2 ring-offset-black sm:h-32 sm:w-32 md:h-36 md:w-36"
                                        data-aos="fade-up"
                                >
                                    <img src={avatar} alt="" />
                                </div>
                            </div>
                        </div>

                        <p className="mt-8 max-w-3xl text-base text-white/70 sm:text-lg">
                            Aspiring Software Engineer who loves building secure and
                            scalable web applications. Solving problems and
                            creating system solutions that make users’ lives
                            easier
                        </p>
                        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex flex-wrap items-center gap-4">
                                <Link
                                    to="/projects"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-500)] px-5 py-3 text-md font-semibold text-white shadow-sm transition hover:bg-[var(--accent-600)]"
                                >
                                    View work
                                </Link>
                                <Link
                                    to="/contact"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-md font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                                >
                                    Start a project
                                </Link>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 md:gap-3 lg:ml-auto lg:border-l lg:border-white/10 lg:pl-8">
                                <a
                                    href="https://github.com/codebeen"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-[#24292e] transition-all hover:scale-105"
                                    aria-label="GitHub profile"
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="tabler-icon tabler-icon-brand-github h-5 w-5 md:h-6 md:w-6 text-white"
                                    >
                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://linkedin.com/in/darben/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-[#0A66C2] transition-all hover:scale-105"
                                    aria-label="LinkedIn profile"
                                    data-aos="fade-up"
                                    data-aos-delay={400}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="tabler-icon tabler-icon-brand-linkedin h-5 w-5 md:h-6 md:w-6 text-white"
                                    >
                                        <path d="M8 11v5"></path>
                                        <path d="M8 8v.01"></path>
                                        <path d="M12 16v-5"></path>
                                        <path d="M16 16v-3a2 2 0 1 0 -4 0"></path>
                                        <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="mailto:darbenlamonte@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-[#5865F2] transition-all hover:scale-105"
                                    aria-label="Send email"
                                    data-aos="fade-up"
                                    data-aos-delay={500}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="tabler-icon tabler-icon-mail h-5 w-5 md:h-6 md:w-6 text-white"
                                    >
                                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                        <path d="M3 7l9 6l9 -6"></path>
                                    </svg>
                                </a>
                                <a
                                    href="/cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-purple-500 transition-all hover:scale-105"
                                    aria-label="View CV"
                                    data-aos="fade-up"
                                    data-aos-delay={600}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-file-text h-5 w-5 text-white group-hover:text-white transition-colors"
                                        aria-hidden="true"
                                    >
                                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        <path d="M10 9H8"></path>
                                        <path d="M16 13H8"></path>
                                        <path d="M16 17H8"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero