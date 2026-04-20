import { FaLinkedin } from "react-icons/fa";
import { SocialLink } from "../ui/SocialLink";
import { SocialIcon } from "../ui/SocialIcon";

function LinkedinLink() {
    return (
        <SocialLink
            href="https://linkedin.com/in/darben/"
            ariaLabel="Linkedin account"
        >
            <SocialIcon>
                <FaLinkedin size={18} />
            </SocialIcon>
            <span className="hidden sm:inline text-sm font-medium">LinkedIn</span>
        </SocialLink>
    );
}

export default LinkedinLink;
