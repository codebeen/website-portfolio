import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

function TechStackCard({ stack, delay = 100 }) {
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
            <div className="relative z-10 flex flex-col items-center justify-center p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10  hover:border-blue-500 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="w-8 h-8 mb-2 flex items-center justify-center text-white/70 group-hover:text-white transition-all">
                    {IconComponent ? (
                        <IconComponent
                            className="w-full h-full"
                            style={{ color: stack.color }}
                        />
                    ) : null}
                </div>
                <span className="text-sm text-white/70 text-center font-medium">
                    {stack.name}
                </span>
            </div>
        </div>
    );
}

export default TechStackCard;
