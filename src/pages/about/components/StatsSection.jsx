import Summary from "./Summary";
import projects from "../../../data/projects.json";
import experiences from "../../../data/experiences.json";
import techstacks from "../../../data/techstacks.json";
import certifications from "../../../data/certifications.json";

function StatsSection() {
    const totalProjects = projects.length;
    const yearsOfExperience = new Date().getFullYear() - 2024;
    const skillCount = techstacks.length;
    const certificationCount = certifications.length;

    return (
        <div className="py-10 grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-4">
            <Summary
                total={totalProjects}
                title="Projects Completed"
                delay={100}
            />
            <Summary
                total={yearsOfExperience}
                title="Years of Experience"
                delay={200}
            />
            <Summary total={skillCount} title="Technologies" delay={300} />
            <Summary
                total={certificationCount}
                title="Certifications"
                delay={400}
            />
        </div>
    );
}

export default StatsSection;
