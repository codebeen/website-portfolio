import { FaGithub } from "react-icons/fa";
import { SocialLink } from "../ui/SocialLink";
import { SocialIcon } from "../ui/SocialIcon";

function GithubLink() {
    return (
        <SocialLink
            href="https://github.com/codebeen"
            ariaLabel="GitHub profile"
        >
            <SocialIcon>
                <FaGithub size={18} />
            </SocialIcon>
            <span className="hidden sm:inline text-sm font-medium">GitHub</span>
        </SocialLink>
    );
}

export default GithubLink;
