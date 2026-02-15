import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import AllCertifications from "./pages/AllCertifications";


function App() {
    const location = useLocation();

    useEffect(() => {
        AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [location.pathname]);

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<AllProjects />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="certifications" element={<AllCertifications />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
