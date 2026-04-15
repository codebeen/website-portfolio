import { HiPhotograph } from 'react-icons/hi';

function ProjectCard({ project, delay = 200 }) {
    const imageSrc = project.image
        ? project.image.startsWith("http")
            ? project.image
            : new URL(`../../assets/projects/${project.image}`, import.meta.url)
                  .href
        : "";
    const handleCardClick = (e) => {
        // Only navigate if clicking the card itself, not the button
        if (project.link && !e.target.closest("a")) {
            window.open(project.link, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <>
            <article
                key={project.title}
                className={`group flex h-full flex-col border border-white/20 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-white/40 ${project.link ? "cursor-pointer" : "cursor-default"}`}
                onClick={handleCardClick}
                data-aos="fade-up"
                data-aos-delay={delay}
            >
                <div className="overflow-hidden rounded-t-2xl h-60 bg-gray-800/50">
                    {imageSrc ? (
                        <img
                            src={imageSrc}
                            alt={`${project.title} preview`}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                    ) : (
                        <div className="h-full w-full flex flex-col items-center justify-center gap-3">
                            <HiPhotograph className="h-16 w-16 text-white/20" />
                            <p className="text-xs text-white/40 uppercase tracking-wider">
                                No image for this project
                            </p>
                        </div>
                    )}
                </div>
                <div className="p-5">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/50">
                        <span>{project.role}</span>
                        <span>{project.year}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">
                        {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/70">
                        {project.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                        {project.technologies.map((technology) => {
                            const Icon = technology.Icon;
                            return (
                                <span
                                    key={technology.name}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                                >
                                    <Icon
                                        className="h-4 w-4"
                                        style={{
                                            color: technology.color || "#fff",
                                        }}
                                    />
                                    {technology.name}
                                </span>
                            );
                        })}
                    </div>
                    <div className="mt-5">
                        {project.link ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
                            >
                                View Project
                                <span aria-hidden="true">→</span>
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-white/40 cursor-not-allowed">
                                Deployed Locally
                            </span>
                        )}
                    </div>
                </div>
            </article>
        </>
    );
}

export default ProjectCard; 