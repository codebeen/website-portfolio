import { useEffect, useMemo, useState } from "react";
import SectionLayout from "../../components/layouts/SectionLayout.jsx";
import CertificationWithImage from "./components/CertificationWithImage.jsx";
import CertificationWithImageSkeleton from "./components/CertificationWithImageSkeleton.jsx";
import certifications from "../../data/certifications.json";
import Footer from "../../components/Footer.jsx";

function AllCertifications() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const pageSize = 9;

    // Filter certifications based on search query
    const filteredCertifications = useMemo(() => {
        return certifications.filter((cert) => {
            const searchLower = searchQuery.toLowerCase();
            return (
                cert.title.toLowerCase().includes(searchLower) ||
                cert.issuer.toLowerCase().includes(searchLower) ||
                cert.date.toLowerCase().includes(searchLower)
            );
        });
    }, [searchQuery]);

    // Sort certifications by date (most recent first)
    const sortedCertifications = useMemo(() => {
        return [...filteredCertifications].sort((a, b) => {
            // Extract year and month from date strings (e.g., "January 2026")
            const parseDate = (dateStr) => {
                const months = {
                    january: 0,
                    february: 1,
                    march: 2,
                    april: 3,
                    may: 4,
                    june: 5,
                    july: 6,
                    august: 7,
                    september: 8,
                    october: 9,
                    november: 10,
                    december: 11,
                };
                const parts = dateStr.toLowerCase().split(" ");
                const month = months[parts[0]] || 0;
                const year = parseInt(parts[1]) || 0;
                return new Date(year, month);
            };
            return parseDate(b.date) - parseDate(a.date);
        });
    }, [filteredCertifications]);

    const totalPages = Math.max(
        1,
        Math.ceil(sortedCertifications.length / pageSize),
    );
    const pagedCertifications = sortedCertifications.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize,
    );

    const goToPage = (page) => {
        const nextPage = Math.min(Math.max(page, 1), totalPages);
        setCurrentPage(nextPage);
    };

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(timer);
    }, [currentPage, searchQuery]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    return (
        <>
            <SectionLayout
                id="certifications"
                title="All Certifications"
                description="A comprehensive list of my certifications that validate my skills and expertise in software development."
                backButton={true}
                isCentered={true}
            >
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(event) => {
                            setSearchQuery(event.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-white/30"
                    />
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {loading
                        ? Array(6)
                              .fill(0)
                              .map((_, i) => (
                                  <CertificationWithImageSkeleton key={i} />
                              ))
                        : pagedCertifications.map((certification, index) => (
                              <CertificationWithImage
                                  key={certification.title}
                                  certification={certification}
                                  delay={100 * index}
                              />
                          ))}
                </div>
                <div className="mt-20 flex flex-wrap items-center justify-center gap-3">
                    <button
                        type="button"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Previous
                    </button>
                    <div className="text-sm text-white/60">
                        Page {currentPage} of {totalPages}
                    </div>
                    <button
                        type="button"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Next
                    </button>
                </div>
            </SectionLayout>
            <Footer />
        </>
    );
}

export default AllCertifications;
