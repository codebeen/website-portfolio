import { Link } from "react-router-dom";
import GithubLink from "../../components/social_links/GithubLink.jsx";
import LinkedinLink from "../../components/social_links/LinkedinLink.jsx";
import EmailLink from "../../components/social_links/EmailLink.jsx";
import ResumeLink from "../../components/social_links/ResumeLink.jsx";
import { HeroBadge } from "./components/HeroBadge.jsx";
import { HeroTitle } from "./components/HeroTitle.jsx";
import { HeroSubtitle } from "./components/HeroSubtitle.jsx";
import { Avatar } from "../../components/ui/Avatar.jsx";
import { ProfileDescription } from "./components/ProfileDescription.jsx";
import { Button } from "../../components/ui/Button.jsx";
import { SocialLinks } from "../../components/ui/SocialLinks.jsx";

function HeroSection () {
    return (
        <section
            id="hero"
            className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center py-12 sm:py-20 lg:py-50"
        >
            <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="flex-1 w-full text-center lg:text-left">
                    <HeroBadge text="Open to work!" />
                    <HeroTitle title="Hey, I'm Darben." />
                    <HeroSubtitle />
                    <ProfileDescription />
                    <div className="mt-6 flex justify-center sm:justify-start">
                        <SocialLinks />
                    </div>
                    <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                        <Button
                            variant="primary"
                            to="/projects"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            View work
                        </Button>
                        <Button
                            variant="outline"
                            to="#contact"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            Start a project
                        </Button>
                    </div>
                </div>
                <div className="flex-shrink-0 order-first lg:order-last">
                    <Avatar />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;