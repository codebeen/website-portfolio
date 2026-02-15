import { useState } from "react";
import techstacks from "../data/techstacks.json";
import SectionLayout from "../layouts/SectionLayout";
import TechStackCard from "../components/cards/TechStackCard";

function Skills() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filterOptions = ["all", "language", "framework", "tools", "database"];

    const filteredStacks =
        activeFilter === "all"
            ? techstacks
            : techstacks.filter((stack) => stack.category === activeFilter);

    const toLabel = (value) =>
        value ? value.charAt(0).toUpperCase() + value.slice(1) : "";

    const baseBtn =
        "px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer border";
    const activeBtn =
        "text-white border border-white/20 bg-gradient-to-r from-blue-500 to-purple-500";
    const inactiveBtn =
        "border-white/10 bg-transparent text-white/60 hover:text-white/80 hover:border-white/20";

    return (
        <>
            <SectionLayout
                id="skills"
                subtitle="Technologies"
                title="Tech Stack"
                description="Tools and technologies I work with to develop modern web solutions."
            >
                <div className="flex flex-wrap gap-2 mb-8 mt-10">
                    {filterOptions.map((option) => (
                        <button
                            key={option}
                            type="button"
                            onClick={() => setActiveFilter(option)}
                            className={`${baseBtn} ${
                                activeFilter === option
                                    ? activeBtn
                                    : inactiveBtn
                            }`}
                        >
                            {toLabel(option)}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {filteredStacks.map((stack) => (
                        <TechStackCard key={stack.name} stack={stack} />
                    ))}
                </div>
            </SectionLayout>
        </>
    );
}

export default Skills;
