import { useState } from "react";
import { HiPhotograph } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import ImageLightbox from "../../../components/ui/ImageLightbox.jsx";

function CertificationWithImage({ certification, delay = 100 }) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const imageSrc = certification.image
        ? certification.image.startsWith("http")
            ? certification.image
            : new URL(
                  `../../../assets/certifications/${certification.image}`,
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
                className="group relative flex h-full flex-col rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10  hover:border-blue-500 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={delay}
            >
                <div 
                    className="overflow-hidden rounded-t-2xl h-60 bg-gray-800/50 cursor-pointer"
                    onClick={() => imageSrc && setIsLightboxOpen(true)}
                >
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
                                <FiExternalLink className="h-4 w-4" />
                                View Certificate
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-white/40 cursor-not-allowed">
                                No Link Available
                            </span>
                        )}
                    </div>
                </div>
            </article>

            {isLightboxOpen && (
                <ImageLightbox
                    src={imageSrc}
                    alt={`${certification.title} certificate`}
                    onClose={() => setIsLightboxOpen(false)}
                />
            )}
        </>
    );
}

export default CertificationWithImage;
