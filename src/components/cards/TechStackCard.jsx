import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

function TechStackCard({ stack, delay = 200 }) {
    const iconSets = {
        si: SiIcons,
        fa: FaIcons,
    };

    const iconSet = stack.iconSet || "si";
    const IconComponent = iconSets[iconSet][stack.icon];

    return (
        <div
            className="group relative rounded-lg"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity opacity-100" />
            <div
                className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity opacity-100"
                style={{
                    "--blur": "0px",
                    "--spread": 50,
                    "--start": stack.glowStart ?? 0,
                    "--active": 0,
                    "--glowingeffect-border-width": "2px",
                    "--repeating-conic-gradient-times": 5,
                    "--gradient":
                        "radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%), radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%), radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%), repeating-conic-gradient(from 236.84deg at 50% 50%, #dd7bbb 0%, #d79f1e calc(25% / var(--repeating-conic-gradient-times)), #5a922c calc(50% / var(--repeating-conic-gradient-times)), #4c7894 calc(75% / var(--repeating-conic-gradient-times)), #dd7bbb calc(100% / var(--repeating-conic-gradient-times)))",
                }}
            >
                <div className="glow rounded-[inherit] after:content-[''] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))] after:[border:var(--glowingeffect-border-width)_solid_transparent] after:[background:var(--gradient)] after:[background-attachment:fixed] after:opacity-[var(--active)] after:transition-opacity after:duration-300 after:[mask-clip:padding-box,border-box] after:[mask-composite:intersect] after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="w-10 h-10 mb-2 flex items-center justify-center text-white/70 group-hover:text-white transition-all">
                    {IconComponent ? (
                        <IconComponent
                            className="w-full h-full"
                            style={{ color: stack.color }}
                        />
                    ) : null}
                </div>
                <span className="text-xs text-white/70 text-center font-medium">
                    {stack.name}
                </span>
            </div>
        </div>
    );
}

export default TechStackCard;
