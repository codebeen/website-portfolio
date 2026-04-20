import { Mail } from "lucide-react";
import { SocialLink } from "../ui/SocialLink";
import { SocialIcon } from "../ui/SocialIcon";

function EmailLink() {
    return (
        <SocialLink
            href="mailto:darbenlamonte@gmail.com"
            ariaLabel="Send an email"
        >
            <SocialIcon>
                <Mail size={18} />
            </SocialIcon>
            <span className="hidden sm:inline text-sm font-medium">Email</span>
        </SocialLink>
    );
}

export default EmailLink;
