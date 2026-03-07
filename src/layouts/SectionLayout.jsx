function SectionLayout({ id, subtitle, title, description, button, children }) {
    return (
        <section
            id={id}
            data-aos="fade-up"
            className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
        >
            <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                    {subtitle && (
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
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