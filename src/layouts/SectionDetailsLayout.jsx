function SectionDetailsLayout({ id, title, description, children }) {
    return (
        <div id={id} className="mx-auto max-w-6xl px-4 py-20">
            {(title || description) && (
                <div className="flex flex-wrap flex-col items-center justify-center gap-1">
                    {title && (
                        <h2 className="font-display mt-3 text-3xl text-white sm:text-4xl">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="mt-3 text-md text-white/70">
                            {description}
                        </p>
                    )}
                </div>
            )}
            {children}
        </div>
    );
}

export default SectionDetailsLayout;