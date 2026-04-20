import SectionLayout from "../../components/layouts/SectionLayout.jsx";
import ProfileSection from "./components/ProfileSection.jsx";
import StatsSection from "./components/StatsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import { GithubContribution } from "./components/GithubContribution.jsx";
import Footer from "../../components/Footer.jsx";

function About() {
    return (
        <>
            <SectionLayout id="about" backButton={true}>
                <ProfileSection />
                <StatsSection />
                <GithubContribution />
                <ContactSection />
            </SectionLayout>
            <Footer/>
        </>
    );
}

export default About;
