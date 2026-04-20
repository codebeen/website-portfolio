import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/home/Home";
import AllProjects from "./pages/projects/AllProjects.jsx";
import Experience from "./pages/experience/ExperienceSection.jsx";
import Skills from "./pages/skills/SkillsSection.jsx";
import Contact from "./pages/contact/ContactSection.jsx";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";
import About from "./pages/about/About.jsx";
import AllCertifications from "./pages/certifications/AllCertifications.jsx";

function App() {
    const location = useLocation();

    useEffect(() => {
        AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [location.pathname]);

    return (
        <div className="bg-slate-950 relative">
            <div className="hero-grid" />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="about" element={<About />} />
                <Route path="projects" element={<AllProjects />} />
                <Route path="certifications" element={<AllCertifications />} />
            </Routes>
        </div>
    );
}

export default App;
