

import SectionDetailsLayout from "../layouts/SectionDetailsLayout";
import avatar from "../assets/avatar.png";
import projects from "../data/projects.json";
import experiences from "../data/experiences.json";
import techstacks from "../data/techstacks.json";
import certifications from "../data/certifications.json";
import Summary from "../components/about/Summary";
import ExperienceOverview from "../components/about/ExperienceOverview";

function About() {
    const totalProjects = projects.length;
    const yearsOfExperience = new Date().getFullYear() - 2024;
    const skillCount = techstacks.length;
    const certificationCount = certifications.length;

    return (
        <>
            <SectionDetailsLayout id="about">
                {/* Profile Section */}
                <div className="reveal mt-10 grid gap-8 lg:grid-cols-[300px_1fr]">
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-2xl ring-2 ring-violet-500/30 ring-offset-4 ring-offset-black">
                            <img
                                src={avatar}
                                alt="Darben"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h2 className="font-display text-4xl text-white">
                                Hi, I'm Darben <span className="wave">👋</span>
                            </h2>
                            <p className="mt-2 text-lg text-violet-400">
                                Full Stack Developer & Backend Specialist
                            </p>
                        </div>

                        <p className="text-base leading-relaxed text-white/70">
                            I am an aspiring Software Engineer passionate about
                            building secure, scalable, and user-centered web
                            applications. I enjoy transforming complex problems
                            into clean, efficient solutions through thoughtful
                            system architecture and well-structured code.
                        </p>

                        <p className="text-base leading-relaxed text-white/70">
                            My focus is on full-stack and API development,
                            particularly within microservices-based systems. I
                            have hands-on experience with Django, ASP.NET, and
                            modern web technologies, allowing me to design and
                            develop robust backend systems while maintaining
                            seamless user experiences.
                        </p>

                        <p className="text-base leading-relaxed text-white/70">
                            I thrive in collaborative environments where
                            continuous learning, innovation, and teamwork drive
                            meaningful impact. Beyond coding, I actively explore
                            emerging technologies, contribute to open-source
                            initiatives, and share knowledge within the
                            developer community to grow both technically and
                            professionally.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-4">
                            <a
                                href="https://github.com/codebeen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#24292e] transition-all hover:scale-105"
                                aria-label="GitHub profile"
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
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/in/darben/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0A66C2] transition-all hover:scale-105"
                                aria-label="LinkedIn profile"
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
                            <a
                                href="mailto:darbenlamonte@gmail.com"
                                className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#5865F2] transition-all hover:scale-105"
                                aria-label="Send email"
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
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 transition-all hover:scale-105"
                                aria-label="View CV"
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

                {/* Stats Section */}
                <div className="mt-16 grid gap-6 sm:grid-cols-4">
                    <Summary total={totalProjects} title="Projects Completed" delay={200} />
                    <Summary total={yearsOfExperience} title="Years of Experience" delay={400} />
                    <Summary total={skillCount} title="Technologies" delay={600} />
                    <Summary total={certificationCount} title="Certifications" delay={800} />
                </div>

                {/* Experience Overview */}
                <div className="mt-16">
                    <h3 className="font-display text-2xl text-white">
                        Professional Journey
                    </h3>
                    <p className="mt-3 text-base text-white/70">
                        I've been fortunate to work with talented teams and
                        contribute to diverse projects across internships,
                        research groups, and student organizations.
                    </p>
                    <div className="mt-6 space-y-4">
                        {experiences.slice(0, 2).flatMap((group, groupIndex) =>
                            group.items.map((exp, expIndex) => (
                                <ExperienceOverview exp={exp} delay={200 * (groupIndex + expIndex + 1)} />
                            )),
                        )}
                    </div>
                </div>

                {/* Skills Highlight */}
                <div className="mt-16">
                    <h3 className="font-display text-2xl text-white">
                        Core Technologies
                    </h3>
                    <p className="mt-3 text-base text-white/70">
                        I work with modern tools and frameworks to build robust,
                        scalable applications.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {techstacks.slice(0, 10).map((tech) => (
                            <span
                                key={tech.name}
                                data-aos="fade-up"
                                data-aos-delay={100 * (techstacks.indexOf(tech) + 1)}
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-16 frame text-center">
                    <h3 className="font-display text-2xl text-white">
                        Let's Work Together
                    </h3>
                    <p className="mt-3 text-base text-white/70">
                        I'm always open to discussing new projects, creative
                        ideas, or opportunities to be part of your vision.
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
            </SectionDetailsLayout>
        </>
    );
}

export default About;