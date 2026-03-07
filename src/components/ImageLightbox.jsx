import { useEffect } from "react";
import { createPortal } from "react-dom";

function ImageLightbox({ src, alt, onClose }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return createPortal(
        <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-md p-6"
            onClick={onClose}
        >
            <div
                className="relative max-h-[85vh] w-full max-w-[95vw] sm:max-w-[80vw] md:max-w-[65vw] lg:max-w-[50vw] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    aria-label="Close image"
                    className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-black/70"
                    onClick={onClose}
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M18 6L6 18" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
        </div>,
        document.body
    );
}

export default ImageLightbox;
