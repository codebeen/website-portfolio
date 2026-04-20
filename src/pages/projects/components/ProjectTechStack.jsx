import { TechStackTag } from "./TechStackTag";

export const ProjectTechStack = ({ project }) => {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((technology) => (
                <TechStackTag key={technology.name} technology={technology} />
            ))}
        </div>
    )
}