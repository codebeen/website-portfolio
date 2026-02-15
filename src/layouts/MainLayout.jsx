import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="py-24">
                <Outlet />
            </main>
            <Footer />
            <button
                type="button"
                aria-label="Back to top"
                className={`fixed bottom-8 cursor-pointer right-8 z-50 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-violet-600 to-blue-500 text-lg font-semibold text-white shadow-[0_16px_30px_rgba(0,0,0,0.4),0_0_18px_rgba(124,58,237,0.45)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(124,58,237,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 ${
                    showBackToTop
                        ? "pointer-events-auto opacity-100 translate-y-0"
                        : "pointer-events-none opacity-0 translate-y-3"
                }`}
                onClick={handleBackToTop}
            >
                <span aria-hidden="true">↑</span>
            </button>
        </div>
    );
}

export default MainLayout;
