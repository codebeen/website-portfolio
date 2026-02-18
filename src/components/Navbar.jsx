import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed left-0 right-0 z-30 px-4 transition-all duration-700 ease-in-out ${
                    isScrolled ? "top-8" : "top-0 py-3"
                }`}
            >
                <div
                    className={`mx-auto flex items-center justify-between px-4 py-3 border transition-all duration-700 ease-in-out ${
                        isScrolled
                            ? "max-w-5xl rounded-full border-white/10 bg-black/80 shadow-lg backdrop-blur"
                            : "max-w-7xl border-transparent bg-transparent"
                    }`}
                >
                    <Link to="/" className="flex items-center gap-3">
                        <span className="font-display text-xl text-white">
                            Darben
                        </span>
                        {/* <span className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                            Engineer
                        </span> */}
                    </Link>
                    <div className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
                        <Link to="/" className="transition hover:text-white">
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="transition hover:text-white"
                        >
                            About
                        </Link>
                        <Link
                            to="/projects"
                            className="transition hover:text-white"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/experience"
                            className="transition hover:text-white"
                        >
                            Experience
                        </Link>
                        <Link
                            to="/certifications"
                            className="transition hover:text-white"
                        >
                            Certifications
                        </Link>
                    </div>
                    <div className="flex gap-2">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-500)] px-4 py-2 text-xs font-bold tracking-[0.2em] text-white transition hover:bg-[var(--accent-600)]"
                        >
                            Contact
                        </Link>
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-500)] px-4 py-2 text-xs font-bold tracking-[0.2em] text-white transition hover:bg-[var(--accent-600)]"
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
