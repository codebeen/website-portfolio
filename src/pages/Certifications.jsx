import certifications from "../data/certifications.json";
import CertificationCard from "../components/cards/CertificationCard";
import SectionLayout from "../layouts/SectionLayout";
import { Link } from "react-router-dom";

function Certifications() {
    return (
        <>
            <SectionLayout
                id="certifications"
                subtitle="Credentials"
                title="Certifications"
                description="Recognized achievements that validate my skills and expertise in software development."
                button={
                    <Link
                        to="/certifications"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
                    >
                        View all
                        <span aria-hidden="true">→</span>
                    </Link>
                }
            >
                <div className="flex flex-col gap-4 mt-8">
                    {certifications.slice(0, 4).map((cert) => (
                        <CertificationCard key={cert.id} certification={cert} />
                    ))}
                </div>
            </SectionLayout>
        </>
    );
}

export default Certifications;
