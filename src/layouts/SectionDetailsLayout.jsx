function SectionDetailsLayout({ id, title, description, children }) {
    return (
        <div id={id} className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
            {(title || description) && (
                <div className="flex flex-wrap flex-col items-center justify-center gap-1">
                    {title && (
                        <h2 className="font-display mt-3 text-2xl text-white sm:text-3xl lg:text-4xl text-center">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="mt-3 text-sm sm:text-md text-white/70 text-center max-w-2xl">
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