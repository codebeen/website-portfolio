import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionLayout from "../../components/layouts/SectionLayout";
import { GithubContribution } from "./components/GithubContribution";
import { Button } from "../../components/ui/Button";
import StatsSection from "./components/StatsSection";
import { ProfileSummary } from "./components/ProfileSummary";
import { LinkButton } from "../../components/ui/LinkButton";

function About() {
    return (
        <SectionLayout
            id="about"
            subtitle="About Me"
            title="Code. Create. Innovate."
            button={<LinkButton to="/about" text="More about me" />}
        >
            <ProfileSummary />
            <StatsSection />
            <GithubContribution />
        </SectionLayout>
    );
}

export default About;
