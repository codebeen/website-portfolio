import { BackButton } from "../ui/BackButton";

export const SECTION_SPACING =
    "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24";

function SectionLayout({ id, subtitle, title, description, button, children, backButton = false, isCentered = false }) {
    return (
        <section
            id={id}
            data-aos="fade-up"
            className={`${SECTION_SPACING} scroll-mt-24`}
        >
            {backButton && <BackButton onClick={() => window.history.back()} />}
            <div
                className={`flex flex-wrap items-center gap-6 ${isCentered ? "justify-center" : "justify-between"}`}
            >
                <div className={isCentered ? "text-center" : ""}>
                    {subtitle && (
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
                            {subtitle}
                        </p>
                    )}
                    <h2 className="font-display mt-3 text-2xl text-white sm:text-3xl lg:text-4xl">
                        {title}
                    </h2>
                    {description && (
                        <p className="mt-3 text-sm text-white/70">
                            {description}
                        </p>
                    )}
                </div>
                {button}
            </div>
            {children}
        </section>
    );
}

export default SectionLayout