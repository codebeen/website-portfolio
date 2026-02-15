function CertificationCard({ certification, delay = 0 }) {
    return (
        <a
            href={certification.url}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-left"
            data-aos-delay={delay}
        >
            <div className="relative rounded-lg cursor-pointer border border-white/10">
                <div className="pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity opacity-100" />
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity opacity-100">
                    <div className="glow rounded-[inherit] after:content-[''] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))] after:[border:var(--glowingeffect-border-width)_solid_transparent] after:[background:var(--gradient)] after:[background-attachment:fixed] after:opacity-[var(--active)] after:transition-opacity after:duration-300 after:[mask-clip:padding-box,border-box] after:[mask-composite:intersect] after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]" />
                </div>
                <div className="relative z-10 w-full text-left p-4 rounded-lg hover:bg-white/[0.03] transition-all group overflow-hidden">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                            <h3 className="text-white font-semibold text-sm md:text-base mb-1 group-hover:text-blue-400 transition-colors">
                                {certification.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                                <span className="flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-blue-400" />
                                    {certification.issuer}
                                </span>
                                <span className="text-white/30">•</span>
                                <span>{certification.date}</span>
                            </div>
                        </div>
                        <svg
                            className="w-5 h-5 text-white/40 group-hover:text-blue-400 flex-shrink-0 mt-1 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default CertificationCard;
