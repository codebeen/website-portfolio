import SectionDetailsLayout from "../layouts/SectionDetailsLayout";
import ProfileSection from "./about_section/ProfileSection.jsx";
import StatsSection from "./about_section/StatsSection.jsx";
import ExperienceOverviewSection from "./about_section/ExperienceOverviewSection.jsx";
import SkillsHighlightSection from "./about_section/SkillsHighlightSection.jsx";
import ContactSection from "./about_section/ContactSection.jsx";

function About() {
    return (
        <>
            <SectionDetailsLayout id="about">
                <ProfileSection />
                <StatsSection />
                <ExperienceOverviewSection />
                <SkillsHighlightSection />
                <ContactSection />
            </SectionDetailsLayout>
        </>
    );
}

export default About;