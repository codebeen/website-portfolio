import GithubLink from "../social_links/GithubLink.jsx";
import LinkedinLink from "../social_links/LinkedinLink.jsx";
import EmailLink from "../social_links/EmailLink.jsx";
import ResumeLink from "../social_links/ResumeLink.jsx";

export const SocialLinks = () => {
    return (
        <div className="flex items-center gap-2 md:gap-3">
            <GithubLink />
            <LinkedinLink />
            <EmailLink />
            <ResumeLink />
        </div>
    );
};
