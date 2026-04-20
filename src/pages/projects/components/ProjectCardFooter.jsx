import { FiExternalLink, FiGithub, FiLock } from "react-icons/fi";

export const ProjectCardFooter = ({ project }) => {
    return (
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
            {project.github_link ? (
                <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                    <FiGithub className="h-4 w-4" />
                    View Github
                </a>
            ) : (
                <span className="inline-flex items-center gap-2 text-sm text-white/30 cursor-not-allowed">
                    <FiGithub className="h-4 w-4" />
                    Private
                </span>
            )}
            {project.link ? (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                    <FiExternalLink className="h-4 w-4" />
                    View Deployed Link
                </a>
            ) : (
                <span className="inline-flex items-center gap-2 text-sm text-white/30 cursor-not-allowed">
                    <FiExternalLink className="h-4 w-4" />
                    No Live Demo
                </span>
            )}
        </div>
    );
};
