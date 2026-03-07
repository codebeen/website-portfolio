import SectionLayout from "../layouts/SectionLayout";
import ProjectCard from "../components/cards/ProjectCard";
import {
    SiDjango,
    SiPython,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiLaravel,
    SiMysql,
    SiDotnet,
    SiTailwindcss,
    SiBootstrap,
} from "react-icons/si";
import { FaCube } from "react-icons/fa";
import projectsData from "../data/projects.json";
import { Link } from "react-router-dom";

function Projects() {
    const iconMap = {
        django: SiDjango,
        python: SiPython,
        html: SiHtml5,
        css: SiCss3,
        tailwind: SiTailwindcss,
        bootstrap: SiBootstrap,
        javascript: SiJavascript,
        laravel: SiLaravel,
        mysql: SiMysql,
        spacy: FaCube,
        "asp.net": SiDotnet,
    };

    const projects = projectsData.map((project) => ({
        ...project,
        technologies: project.technologies.map((tech) => ({
            ...tech,
            Icon: iconMap[tech.icon.toLowerCase()] || iconMap["javascript"],
        })),
    }));

    return (
        <>
            <SectionLayout
                id="projects"
                subtitle="Portfolio"
                title="Featured Projects"
                description="A showcase of projects that demonstrate my skills and experience in software engineering."
                button={
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
                    >
                        View all projects
                        <span aria-hidden="true">→</span>
                    </Link>
                }
            >
                <div className="mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, 3).map((project, index) => (
                        <ProjectCard key={project.title} project={project} delay={200 * (index + 1)} />
                    ))}
                </div>
            </SectionLayout>
        </>
    );
}

export default Projects;
