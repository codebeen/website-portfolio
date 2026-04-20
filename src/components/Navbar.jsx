import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === "/";

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        
        if (isHomePage) {
            // Already on homepage, just scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Navigate to homepage first, then scroll
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="fixed left-0 right-0 top-0 z-30 bg-slate-950/50 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
                    <Link to="/" className="flex items-center gap-3">
                        <span className="font-display  text-xl text-white">
                            {"<darben"}
                            <span className="text-blue-500 font-bold">/</span>
                            {">"}
                        </span>
                    </Link>
                    <div className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
                        <a
                            href=""
                            onClick={(e) => handleNavClick(e, "hero")}
                            className="nav-link cursor-pointer"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => handleNavClick(e, "about")}
                            className="nav-link cursor-pointer"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => handleNavClick(e, "projects")}
                            className="nav-link cursor-pointer"
                        >
                            Projects
                        </a>
                        <a
                            href="#experience"
                            onClick={(e) => handleNavClick(e, "experience")}
                            className="nav-link cursor-pointer"
                        >
                            Experience
                        </a>
                        <a
                            href="#certifications"
                            onClick={(e) => handleNavClick(e, "certifications")}
                            className="nav-link cursor-pointer"
                        >
                            Certifications
                        </a>
                    </div>
                    <div className="hidden gap-2 md:flex">
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold tracking-[0.2em] text-white transition hover:bg-blue-700"
                        >
                            Resume
                        </a>
                    </div>
                    <button
                        type="button"
                        onClick={handleToggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-nav"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition md:hidden"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        {isMenuOpen ? (
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6L6 18" />
                                <path d="M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 6h18" />
                                <path d="M3 12h18" />
                                <path d="M3 18h18" />
                            </svg>
                        )}
                    </button>
                </div>
                <div
                    id="mobile-nav"
                    className={`mx-auto mt-3 w-full max-w-5xl rounded-2xl border border-white/10 bg-black/70 px-4 py-4 shadow-lg backdrop-blur md:hidden ${
                        isMenuOpen ? "block" : "hidden"
                    }`}
                >
                    <div className="flex flex-col gap-3 text-sm font-medium text-white/80">
                        <a
                            href=""
                            className="transition hover:text-white"
                            onClick={(e) => handleNavClick(e, "hero")}
                            className="transition hover:text-white cursor-pointer"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => handleNavClick(e, "about")}
                            className="transition hover:text-white cursor-pointer"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => handleNavClick(e, "projects")}
                            className="transition hover:text-white cursor-pointer"
                        >
                            Projects
                        </a>
                        <a
                            href="#experience"
                            onClick={(e) => handleNavClick(e, "experience")}
                            className="transition hover:text-white cursor-pointer"
                        >
                            Experience
                        </a>
                        <a
                            href="#certifications"
                            onClick={(e) => handleNavClick(e, "certifications")}
                            className="transition hover:text-white cursor-pointer"
                        >
                            Certifications
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, "contact")}
                            className="transition hover:text-white cursor-pointer"
                        >
                            Contact
                        </a>
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-white"
                            onClick={handleCloseMenu}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
