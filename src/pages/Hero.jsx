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
            className="mx-auto max-w-6xl px-4 min-h-full py-50 sm:min-h-screen flex items-start"
        >
            <div className="grid gap-10 lg:grid-cols-1 lg:items-center w-full">
                <div className="reveal">
                    <span className="rounded-full bg-[var(--accent-400)]/20 px-3 py-1 text-xs font-semibold text-[var(--accent-400)]">
                        Open to work!
                    </span>
                    <div className="flex items-center justify-between w-full">
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

                        <div className="flex justify-center lg:justify-end">
                            <div
                                class="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-blue-500/30 ring-offset-2 ring-offset-black sm:h-32 sm:w-32 md:h-36 md:w-36"
                                data-aos="fade-up"
                            >
                                <img src={avatar} alt="" />
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 max-w-3xl text-base text-white/70 sm:text-lg">
                        Aspiring Software Engineer who loves building secure and
                        scalable web applications. Solving problems and creating
                        system solutions that make users’ lives easier
                    </p>
                    <div className="mt-10 flex items-center justify-between">
                        <div className=" hidden sm:flex flex-wrap items-center gap-4">
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
                        <div class="flex lg:ml-auto items-center gap-2 md:gap-3 lg:border-l lg:border-white/10 lg:pl-8">
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