import { TypeAnimation } from "react-type-animation";

export const HeroSubtitle = () => {
    return (
        <p className="text-slate-300 text-xl sm:text-3xl lg:text-4xl font-mono mt-3" >
            <TypeAnimation
                sequence={[
                    "a software engineer.",
                    2000,
                    "a backend specialist.",
                    2000,
                    "a dreamer.",
                    2000,
                    "a builder.",
                    2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: "inline-block" }}
            />
        </p>
    );
}