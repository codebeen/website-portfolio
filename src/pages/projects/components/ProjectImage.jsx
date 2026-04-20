import { useState } from "react";
import ImageLightbox from "../../../components/ui/ImageLightbox.jsx";

export const ProjectImage = ({ imageUrl, title }) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <>
            <div 
                className="h-48 overflow-hidden bg-gray-800/50 cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
            >
                <img
                    src={imageUrl}
                    alt={`${title} preview`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                />
            </div>

            {isLightboxOpen && (
                <ImageLightbox
                    src={imageUrl}
                    alt={`${title} preview`}
                    onClose={() => setIsLightboxOpen(false)}
                />
            )}
        </>
    );
};
