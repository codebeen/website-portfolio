import avatar from '../../assets/avatar.png';
import ResumeLink from '../../components/social_links/ResumeLink.jsx';
import EmailLink from '../../components/social_links/EmailLink.jsx';
import GithubLink from '../../components/social_links/GithubLink.jsx';
import LinkedinLink from '../../components/social_links/LinkedinLink.jsx';

function ProfileSection() {
    return (
        <div className="reveal mt-10 grid gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">
            <div className="flex justify-center md:justify-start">
                <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-60 md:w-60 lg:h-64 lg:w-64 shrink-0 overflow-hidden rounded-2xl ring-2 ring-violet-500/30 ring-offset-4 ring-offset-black">
                    <img
                        src={avatar}
                        alt="Darben"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <h2
                        className="font-display text-3xl sm:text-4xl text-white"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        Hi, I'm Darben <span className="wave">👋</span>
                    </h2>
                    <p
                        className="mt-2 text-lg text-violet-400"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >
                        Full Stack Developer & Backend Specialist
                    </p>
                </div>

                <p
                    className="text-base leading-relaxed text-white/70"
                    data-aos="fade-up"
                    data-aos-delay={300}
                >
                    I am an aspiring Software Engineer passionate about building
                    secure, scalable, and user-centered web applications. I
                    enjoy transforming complex problems into clean, efficient
                    solutions through thoughtful system architecture and
                    well-structured code.
                </p>

                <p
                    className="text-base leading-relaxed text-white/70"
                    data-aos="fade-up"
                    data-aos-delay={400}
                >
                    My focus is on full-stack and API development, particularly
                    within microservices-based systems. I have hands-on
                    experience with Django, ASP.NET, and modern web
                    technologies, allowing me to design and develop robust
                    backend systems while maintaining seamless user experiences.
                </p>

                <p
                    className="text-base leading-relaxed text-white/70"
                    data-aos="fade-up"
                    data-aos-delay={500}
                >
                    I thrive in collaborative environments where continuous
                    learning, innovation, and teamwork drive meaningful impact.
                    Beyond coding, I actively explore emerging technologies,
                    contribute to open-source initiatives, and share knowledge
                    within the developer community to grow both technically and
                    professionally.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-4">
                    <GithubLink />
                    <LinkedinLink />
                    <EmailLink />
                    <ResumeLink />
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;