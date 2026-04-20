import MainLayout from "../../components/layouts/MainLayout.jsx";
import HeroSection from "../hero/HeroSection.jsx";
import Projects from "../projects/Projects.jsx";
import Experience from "../experience/ExperienceSection.jsx";
import Skills from "../skills/SkillsSection.jsx";
import Certifications from "../certifications/CertificationsSection.jsx";
import Contact from "../contact/ContactSection.jsx";
import About from "../about/AboutSection.jsx";

function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Certifications />
            <Contact />
        </>
    );
}

export default Home;
