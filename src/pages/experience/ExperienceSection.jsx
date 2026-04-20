import { useEffect, useState } from "react";
import experiences from "../../data/experiences.json";
import SectionLayout from "../../components/layouts/SectionLayout.jsx";
import FilterButtons from "./components/FilterButtons.jsx";
import Timeline from "./components/Timeline.jsx";

function ExperienceSection() {
    const [active, setActive] = useState("All");
    const [loading, setLoading] = useState(true);

    const typeStyles = {
        work: "bg-emerald-500/15 text-emerald-200",
        organization: "bg-sky-500/15 text-sky-200",
        education: "bg-amber-500/15 text-amber-200",
    };
    const toLabel = (value) =>
        value ? value.charAt(0).toUpperCase() + value.slice(1) : "";

    const timeline = experiences;

    const normalizedActive = active.toLowerCase();
    const filteredTimeline = timeline
        .map((group) => ({
            ...group,
            items:
                normalizedActive === "all"
                    ? group.items
                    : group.items.filter(
                          (item) => item.type === normalizedActive,
                      ),
        }))
        .filter((group) => group.items.length > 0);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SectionLayout
            id="experience"
            subtitle="Timeline"
            title="My Journey"
            description="A timeline of my growth — from student beginnings to software engineering."
        >
            <FilterButtons
                active={active}
                setActive={setActive}
                options={["All", "Work", "Organization", "Education"]}
            />

            <Timeline
                filteredTimeline={filteredTimeline}
                loading={loading}
                typeStyles={typeStyles}
                toLabel={toLabel}
            />
        </SectionLayout>
    );
}

export default ExperienceSection;
