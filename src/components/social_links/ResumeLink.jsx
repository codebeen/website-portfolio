import { FileText } from "lucide-react";
import { SocialLink } from "../ui/SocialLink";
import { SocialIcon } from "../ui/SocialIcon";

function ResumeLink() {
    return (
        <SocialLink
            href="/cv.pdf"
            ariaLabel="View CV"
        >
            <SocialIcon>
                <FileText size={18} />
            </SocialIcon>
            <span className="hidden sm:inline text-sm font-medium">Resume</span>
        </SocialLink>
    );
}

export default ResumeLink;