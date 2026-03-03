import techstacks from "../../data/techstacks.json";

function SkillsHighlightSection() {
    return (
        <div className="mt-16">
            <h3 className="font-display text-2xl text-white">
                Core Technologies
            </h3>
            <p className="mt-3 text-base text-white/70">
                I work with modern tools and frameworks to build robust,
                scalable applications.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
                {techstacks.slice(0, 10).map((tech) => (
                    <span
                        key={tech.name}
                        data-aos="fade-up"
                        data-aos-delay={100 * (techstacks.indexOf(tech) + 1)}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                    >
                        {tech.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SkillsHighlightSection;