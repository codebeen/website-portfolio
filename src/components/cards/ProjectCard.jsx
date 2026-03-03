import { HiPhotograph } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

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
                className={`group flex h-full flex-col border border-white/20 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-white/40 hover:bg-white/5 ${project.link ? "cursor-pointer" : "cursor-default"}`}
                onClick={handleCardClick}
                data-aos="fade-up"
                data-aos-delay={delay}
            >
                <div className="overflow-hidden rounded-t-2xl h-60 bg-gray-800/50">
                    {imageSrc ? (
                        <div className="relative h-full w-full">
                            <img
                                src={imageSrc}
                                alt={`${project.title} preview`}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${project.title} live site`}
                                    className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/20 px-3 py-1 text-sm font-semibold text-white/90 shadow backdrop-blur-sm transition hover:bg-black/70"
                                >
                                    <FiExternalLink className="h-4 w-4" />
                                    <span>Live</span>
                                </a>
                            )}
                        </div>
                    ) : (
                        <div className="h-full w-full flex flex-col items-center justify-center gap-3">
                            <HiPhotograph className="h-16 w-16 text-white/20" />
                            <p className="text-xs text-white/40 uppercase tracking-wider">
                                No image for this project
                            </p>
                        </div>
                    )}
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/50">
                            <span>{project.role}</span>
                            <span>{project.year}</span>
                        </div>
                        <h3 className={`mt-4 text-xl font-semibold ${project.link ? "group-hover:text-indigo-400" : "text-white/90"} transition-colors`}>
                            {project.title}
                        </h3>
                        <p className="mt-3 text-sm text-white/70">
                            {project.summary}
                        </p>
                    </div>
                    <div className="mt-5 flex items-center gap-3">
                        <div className="flex items-center flex-wrap gap-3">
                            {project.technologies.map((technology) => {
                                const Icon = technology.Icon;
                                return (
                                    <Tippy
                                        key={technology.name}
                                        content={technology.name}
                                        placement="top"
                                    >
                                        <span
                                            role="img"
                                            className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 border border-white/10 text-xs text-white/90 shadow-sm transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                                        >
                                            <Icon
                                                className="h-4 w-4"
                                                style={{
                                                    color:
                                                        technology.color ||
                                                        "#fff",
                                                }}
                                            />
                                        </span>
                                    </Tippy>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default ProjectCard;
