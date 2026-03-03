import ExperienceOverview from "../../components/about/ExperienceOverview";
import experiences from "../../data/experiences.json";


function ExperienceOverviewSection() {
    return (
        <div className="mt-16">
            <h3 className="font-display text-2xl text-white">
                Professional Journey
            </h3>
            <p className="mt-3 text-base text-white/70">
                I've been fortunate to work with talented teams and contribute
                to diverse projects across internships, research groups, and
                student organizations.
            </p>
            <div className="mt-6 space-y-4">
                {experiences
                    .slice(0, 2)
                    .flatMap((group, groupIndex) =>
                        group.items.map((exp, expIndex) => (
                            <ExperienceOverview
                                exp={exp}
                                delay={200 * (groupIndex + expIndex + 1)}
                            />
                        )),
                    )}
            </div>
        </div>
    );
}

export default ExperienceOverviewSection;