import MainLayout from "../layouts/MainLayout";
import Hero from "./Hero";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Contact from "./Contact";

function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <Certifications />
            <Contact />
        </>
    );
}

export default Home;