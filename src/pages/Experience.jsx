import { useEffect, useRef, useState } from "react";
import ExperienceCard from "../components/cards/ExperienceCard";
import experiences from "../data/experiences.json";
import SectionLayout from "../layouts/SectionLayout";

function Experience() {
    const [active, setActive] = useState("All");
    const [progress, setProgress] = useState(0);
    const timelineRef = useRef(null);

    const baseBtn =
        "px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer border";
    const activeBtn = "text-white border border-white/20 bg-gradient-to-r from-blue-500 to-purple-500";
    const inactiveBtn =
        "border-white/10 bg-transparent text-white/60 hover:text-white/80 hover:border-white/20";
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
        const handleScroll = () => {
            if (!timelineRef.current) {
                return;
            }

            const rect = timelineRef.current.getBoundingClientRect();
            const total = rect.height + window.innerHeight;
            const current = window.innerHeight - rect.top;
            const nextProgress = Math.min(Math.max(current / total, 0), 1);

            setProgress(nextProgress);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <>
            <SectionLayout
                id="experience"
                subtitle="Timeline"
                title="My Journey"
                description="A timeline of my growth — from student beginnings to software engineering."
            >
                <div className="flex flex-wrap gap-2 mb-8 mt-8">
                    {["All", "Work", "Organization", "Education"].map(
                        (label) => (
                            <button
                                key={label}
                                type="button"
                                onClick={() => setActive(label)}
                                className={`${baseBtn} ${
                                    active === label ? activeBtn : inactiveBtn
                                }`}
                            >
                                <span className="relative z-10">{label}</span>
                            </button>
                        ),
                    )}
                </div>

                <div
                    ref={timelineRef}
                    className="timeline-wrap space-y-12"
                    style={{ "--timeline-progress": progress }}
                >
                    <div className="timeline-line" aria-hidden="true">
                        <span className="timeline-trace" />
                    </div>
                    {filteredTimeline.map((group) => (
                        <div
                            key={group.year}
                            className="flex justify-start pt-10 md:pt-16 md:gap-10 overflow-visible"
                        >
                            <div className="sticky flex flex-col md:flex-row z-50 items-center top-24 self-start max-w-xs lg:max-w-sm md:w-full h-fit">
                                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <div className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border border-white/20" />
                                </div>
                                <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-white/80">
                                    {group.year}
                                </h3>
                            </div>
                            <div className="relative pl-6 pr-4 md:pl-20 w-full">
                                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white/80">
                                    {group.year}
                                </h3>
                                <div className="space-y-4">
                                    {group.items.map((item, i) => (
                                        <ExperienceCard
                                            key={`${group.year}-${i}`}
                                            item={item}
                                            typeStyles={typeStyles}
                                            toLabel={toLabel}
                                            delay={200 * (i + 1)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionLayout>
        </>
    );
}

export default Experience;
