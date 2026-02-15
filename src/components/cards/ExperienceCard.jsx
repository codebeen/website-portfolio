import { useMemo, useState } from "react";

function ExperienceCard({ item, typeStyles, toLabel, delay = 200 }) {
    const [isOpen, setIsOpen] = useState(false);
    const hasDetails = Array.isArray(item.details) && item.details.length > 0;
    const glowStart = useMemo(() => item.glowStart ?? 0, [item.glowStart]);

    const handleToggle = () => {
        if (!hasDetails) {
            return;
        }

        setIsOpen((prev) => !prev);
    };

    return (
        <div
            className="group relative rounded-lg cursor-pointer"
            onClick={handleToggle}
            role={hasDetails ? "button" : undefined}
            tabIndex={hasDetails ? 0 : undefined}
            aria-expanded={hasDetails ? isOpen : undefined}
            data-aos="fade-left"
            data-aos-delay={delay}
        >
            <div className="pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity opacity-100" />
            <div
                className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity opacity-100"
                style={{
                    "--blur": "0px",
                    "--spread": 50,
                    "--start": glowStart,
                    "--active": 0,
                    "--glowingeffect-border-width": "2px",
                    "--repeating-conic-gradient-times": 5,
                    "--gradient":
                        "radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%), radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%), radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%), repeating-conic-gradient(from 236.84deg at 50% 50%, #dd7bbb 0%, #d79f1e calc(25% / var(--repeating-conic-gradient-times)), #5a922c calc(50% / var(--repeating-conic-gradient-times)), #4c7894 calc(75% / var(--repeating-conic-gradient-times)), #dd7bbb calc(100% / var(--repeating-conic-gradient-times)))",
                }}
            >
                <div className="glow rounded-[inherit] after:content-[''] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))] after:[border:var(--glowingeffect-border-width)_solid_transparent] after:[background:var(--gradient)] after:[background-attachment:fixed] after:opacity-[var(--active)] after:transition-opacity after:duration-300 after:[mask-clip:padding-box,border-box] after:[mask-composite:intersect] after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]" />
            </div>
            <div className="relative z-10 p-4 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-all overflow-hidden">
                <div className="flex items-center gap-2 mb-1.5">
                    <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide ${
                            typeStyles[item.type]
                        }`}
                    >
                        {toLabel(item.type)}
                    </span>
                    <h4 className="text-white font-semibold text-sm md:text-base">
                        {item.title}
                    </h4>
                </div>
                {item.subtitle ? (
                    <p className="flex flex-wrap items-center gap-x-2 text-white/50 text-xs mb-1.5">
                        <span>{item.subtitle}</span>
                        {item.year ? (
                            <span className="text-white/40">• {item.year}</span>
                        ) : null}
                    </p>
                ) : null}
                {item.description ? (
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                        {item.description}
                    </p>
                ) : null}
                {hasDetails ? (
                    <div
                        className="overflow-hidden"
                        style={{
                            opacity: isOpen ? 1 : 0,
                            height: isOpen ? "auto" : 0,
                        }}
                    >
                        <div className="mt-3 pt-3 border-t border-white/[0.08]">
                            <ul className="space-y-2">
                                {item.details.map((detail, index) => (
                                    <li
                                        key={`${item.title}-${index}`}
                                        className="flex gap-2 text-white/60 text-xs leading-relaxed"
                                    >
                                        <span className="text-white/30 mt-0.5 flex-shrink-0">
                                            •
                                        </span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : null}
                {hasDetails ? (
                    <button
                        type="button"
                        onClick={handleToggle}
                        className="flex items-center gap-1.5 mt-3 text-[10px] text-white/30 group-hover:text-white/50 transition-colors"
                        aria-expanded={isOpen}
                    >
                        <span className="uppercase tracking-wider font-medium">
                            {isOpen ? "Less" : "More"}
                        </span>
                        <svg
                            className={`w-3 h-3 transition-transform ${
                                isOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                ) : null}
            </div>
        </div>
    );
}

export default ExperienceCard;
