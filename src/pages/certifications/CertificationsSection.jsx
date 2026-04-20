import { useState, useEffect } from "react";
import certifications from "../../data/certifications.json";
import CertificationCard from "./components/CertificationCard.jsx";
import CertificationCardSkeleton from "./components/CertificationCardSkeleton.jsx";
import SectionLayout from "../../components/layouts/SectionLayout.jsx";
import { Link } from "react-router-dom";
import { LinkButton } from "../../components/ui/LinkButton.jsx";

function CertificationsSection() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <SectionLayout
                id="certifications"
                subtitle="Credentials"
                title="Certifications"
                description="Recognized achievements that validate my skills and expertise in software development."
                button={<LinkButton to={"/certifications"} text={"View all certifications"} />}
            >
                <div className="flex flex-col gap-4 mt-8">
                    {loading
                        ? Array(4)
                              .fill(0)
                              .map((_, i) => (
                                  <CertificationCardSkeleton key={i} />
                              ))
                        : certifications
                              .slice(0, 4)
                              .map((cert, index) => (
                                  <CertificationCard
                                      key={cert.id}
                                      certification={cert}
                                      delay={100 * index}
                                  />
                              ))}
                </div>
            </SectionLayout>
        </>
    );
}

export default CertificationsSection;
