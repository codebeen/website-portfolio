import ExperienceCard from "./ExperienceCard.jsx";
import ExperienceCardSkeleton from "../../certifications/components/CertificationCardSkeleton.jsx";
import TimelineYear from "./TimelineYear.jsx";

function TimelineGroup({ group, loading, typeStyles, toLabel }) {
    return (
        <div className="flex justify-start pt-10 md:pt-16 md:gap-10 overflow-visible">
            <TimelineYear year={group.year} />
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white/80">
                    {group.year}
                </h3>
                <div className="space-y-4">
                    {loading
                        ? Array(2).fill(0).map((_, i) => <ExperienceCardSkeleton key={i} />)
                        : group.items.map((item, i) => (
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
    );
}

export default TimelineGroup;
