import { HiPhotograph } from 'react-icons/hi';
import { TechStackTag } from './TechStackTag';
import { ProjectImage } from './ProjectImage';
import { ProjectTitle } from './ProjectTitle';
import { ProjectSummary } from './ProjectSummary';
import { ProjectCardFooter } from './ProjectCardFooter';
import { ProjectTechStack } from './ProjectTechStack';

function ProjectCard({ project, delay = 200 }) {
    const imageSrc = project.image
        ? project.image.startsWith("http")
            ? project.image
            : new URL(`../../../assets/projects/${project.image}`, import.meta.url).href
        : "";

    return (
        <article
            className="group relative flex h-full flex-col rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10  hover:border-blue-500 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            {imageSrc && (
                <ProjectImage imageUrl={imageSrc} title={project.title} />
            )}

            <div className="p-6 flex flex-col flex-1">
                <ProjectTitle title={project.title} />
                <ProjectSummary summary={project.summary} />
                <ProjectTechStack project={project} />
                <ProjectCardFooter project={project} />
            </div>
        </article>
    );
}

export default ProjectCard;
