import { useState, useEffect } from "react";
import techstacks from "../../data/techstacks.json";
import SectionLayout from "../../components/layouts/SectionLayout.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import TechStackGrid from "./components/TechStackGrid.jsx";

function SkillsSection() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [loading, setLoading] = useState(true);

    const filterOptions = ["all", "language", "framework", "tools", "database"];

    const filteredStacks =
        activeFilter === "all"
            ? techstacks
            : techstacks.filter((stack) => stack.category === activeFilter);

    const toLabel = (value) =>
        value ? value.charAt(0).toUpperCase() + value.slice(1) : "";

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SectionLayout
            id="skills"
            subtitle="Technologies"
            title="Tech Stack"
            description="Tools and technologies I work with to develop modern web solutions."
        >
            <CategoryFilter
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                options={filterOptions}
                toLabel={toLabel}
            />

            <TechStackGrid loading={loading} stacks={filteredStacks} />
        </SectionLayout>
    );
}

export default SkillsSection;
