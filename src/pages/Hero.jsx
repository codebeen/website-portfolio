import { TypeAnimation } from "react-type-animation";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
import GithubLink from "../components/social_links/GithubLink";
import LinkedinLink from "../components/social_links/LinkedinLink";
import EmailLink from "../components/social_links/EmailLink";
import ResumeLink from "../components/social_links/ResumeLink";
import SectionLayout from "../layouts/SectionLayout";

function Home () {
    return (
        <section
            id="home"
            className="mx-auto max-w-6xl px-4 sm:px-6 min-h-screen py-16 sm:py-32 lg:py-50 flex items-start overflow-hidden"
        >
            <div className="grid gap-10 lg:grid-cols-1 lg:items-center w-full">
                <div className="reveal">
                    <span className="rounded-full bg-[var(--accent-400)]/20 px-3 py-1 text-xs font-semibold text-[var(--accent-400)]">
                        Open to work!
                    </span>
                    <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between w-full gap-6 sm:gap-4">
                        <div className="min-w-0">
                            <h1 className="font-display mt-4 text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
                                Hey, I'm Darben
                            </h1>
                            <p className="text-white text-xl sm:text-3xl lg:text-4xl font-mono mt-3">
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
                            <div
                                className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-blue-500/30 ring-offset-2 ring-offset-black sm:h-32 sm:w-32 md:h-36 md:w-36"
                                data-aos="fade-up"
                            >
                                <img src={avatar} alt="" className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <p className="mt-6 sm:mt-8 max-w-3xl text-sm text-white/70 sm:text-base lg:text-lg">
                        Aspiring Software Engineer who loves building secure and
                        scalable web applications. Solving problems and creating
                        system solutions that make users’ lives easier
                    </p>
                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4">
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                            <Link
                                to="/projects"
                                data-aos="fade-up"
                                data-aos-delay={100}
                                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-500)] px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-md font-semibold text-white shadow-sm transition hover:bg-[var(--accent-600)]"
                            >
                                View work
                            </Link>
                            <Link
                                to="/contact"
                                data-aos="fade-up"
                                data-aos-delay={200}
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-md font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                            >
                                Start a project
                            </Link>
                        </div>
                        <div className="flex sm:ml-auto items-center gap-2 md:gap-3 sm:border-l sm:border-white/10 sm:pl-6 lg:pl-8">
                            <GithubLink />
                            <LinkedinLink />
                            <EmailLink />
                            <ResumeLink />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home