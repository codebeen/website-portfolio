import { HiPhotograph } from "react-icons/hi";

function CertificationWithImage({ certification, delay = 200 }) {
    const imageSrc = certification.image
        ? certification.image.startsWith("http")
            ? certification.image
            : new URL(
                  `../../assets/certifications/${certification.image}`,
                  import.meta.url,
              ).href
        : "";

    const handleCardClick = (e) => {
        // Only navigate if clicking the card itself, not the button
        if (certification.url && !e.target.closest("a")) {
            window.open(certification.url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <>
            <article
                key={certification.title}
                className={`group flex h-full flex-col border border-white/20 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-white/40 ${certification.url ? "cursor-pointer" : "cursor-default"}`}
                onClick={handleCardClick}
                data-aos="fade-up"
                data-aos-delay={delay}
            >
                <div className="overflow-hidden rounded-t-2xl h-60 bg-gray-800/50">
                    {imageSrc ? (
                        <img
                            src={imageSrc}
                            alt={`${certification.title} certificate`}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                    ) : (
                        <div className="h-full w-full flex flex-col items-center justify-center gap-3">
                            <HiPhotograph className="h-16 w-16 text-white/20" />
                            <p className="text-xs text-white/40 uppercase tracking-wider">
                                No image available
                            </p>
                        </div>
                    )}
                </div>
                <div className="p-5">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/50">
                        <span>{certification.issuer}</span>
                        <span>{certification.date}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">
                        {certification.title}
                    </h3>
                    <div className="mt-5">
                        {certification.url ? (
                            <a
                                href={certification.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
                            >
                                View Certificate
                                <span aria-hidden="true">→</span>
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-white/40 cursor-not-allowed">
                                No Link Available
                            </span>
                        )}
                    </div>
                </div>
            </article>
        </>
    );
}

export default CertificationWithImage;
