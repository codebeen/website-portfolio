
function ExperienceOverview({ exp, delay = 200 }) {
    return (
        <>
            <div
                key={exp.title}
                className="frame hover:border-white/20 transition"
                data-aos="fade-left"
                data-aos-delay={delay}
            >
                <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                        <h4 className="text-lg font-semibold text-white">
                            {exp.title}
                        </h4>
                        <p className="text-sm text-white/60">{exp.subtitle}</p>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-white/50">
                        {exp.year}
                    </span>
                </div>
                <p className="mt-3 text-sm text-white/70">{exp.description}</p>
            </div>
        </>
    );
}

export default ExperienceOverview;