import { useEffect, useMemo, useState } from "react";
import SectionDetailsLayout from "../layouts/SectionDetailsLayout";
import projects from "../data/projects.json";
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
import { BiSolidServer } from "react-icons/bi";
import { FaMicrosoft, FaReact } from "react-icons/fa6";

function AllProjects() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [techFilter, setTechFilter] = useState("");
    const pageSize = 6;
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
        mssql: BiSolidServer,
        spacy: FaCube,
        react: FaReact,
        mssql: FaMicrosoft,
        "asp.net": SiDotnet,
    };

    const projectsWithIcons = projects.map((project) => ({
        ...project,
        technologies: project.technologies.map((tech) => ({
            ...tech,
            Icon: iconMap[tech.icon.toLowerCase()] || iconMap["javascript"],
        })),
    }));

    const filteredProjects = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();
        return projectsWithIcons.filter((project) => {
            const matchesQuery = normalizedQuery
                ? [project.title, project.summary, project.role, project.year]
                      .filter(Boolean)
                      .some((value) =>
                          value.toLowerCase().includes(normalizedQuery),
                      )
                : true;

            const matchesTech = techFilter
                ? project.technologies.some(
                      (tech) =>
                          tech.icon.toLowerCase() === techFilter ||
                          tech.name.toLowerCase() === techFilter,
                  )
                : true;

            return matchesQuery && matchesTech;
        });
    }, [projectsWithIcons, searchQuery, techFilter]);

    const sortedProjects = useMemo(
        () =>
            [...filteredProjects].sort(
                (a, b) =>
                    Number(b.year) - Number(a.year) ||
                    a.title.localeCompare(b.title),
            ),
        [filteredProjects],
    );

    const totalPages = Math.max(1, Math.ceil(sortedProjects.length / pageSize));
    const pagedProjects = sortedProjects.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize,
    );

    const goToPage = (page) => {
        setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    };

    useEffect(() => {
        const target = document.getElementById("projects");
        const scrollToTarget = () => {
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        };

        requestAnimationFrame(scrollToTarget);
    }, [currentPage]);

    return (
        <>
            <SectionDetailsLayout
                id="projects"
                title="All Projects"
                description="A comprehensive list of all projects that I have worked on, showcasing my skills and experience in software engineering."
            >
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(event) => {
                            setSearchQuery(event.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full sm:w-3/4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-white/30"
                    />
                    <div className="relative w-full sm:w-1/4">
                        <select
                            value={techFilter}
                            onChange={(event) => {
                                setTechFilter(event.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-10 text-sm text-white outline-none transition focus:border-white/30"
                        >
                            <option className="bg-gray-900" value="">All Technologies</option>
                            <option className="bg-gray-900" value="asp.net">ASP.NET</option>
                            <option className="bg-gray-900" value="csharp">C#</option>
                            <option className="bg-gray-900" value="django">Django</option>
                            <option className="bg-gray-900" value="javascript">JavaScript</option>
                            <option className="bg-gray-900" value="laravel">Laravel</option>
                            <option className="bg-gray-900" value="mssql">MS SQL</option>
                            <option className="bg-gray-900" value="mysql">MySQL</option>
                            <option className="bg-gray-900" value="python">Python</option>
                            <option className="bg-gray-900" value="react">React</option>
                        </select>
                        <svg
                            aria-hidden="true"
                            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {pagedProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} delay={200 * (index + 1)} />
                    ))}
                </div>
                <div className="mt-20 flex flex-wrap items-center justify-center gap-3">
                    <button
                        type="button"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Previous
                    </button>
                    <div className="text-sm text-white/60">
                        Page {currentPage} of {totalPages}
                    </div>
                    <button
                        type="button"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Next
                    </button>
                </div>
            </SectionDetailsLayout>
        </>
    );
}

export default AllProjects;
