import { Link } from "react-router-dom";

export const BackButton = ({ onClick }) => {
    return (
        <Link to="/" className="inline-flex items-center gap-1 text-md font-medium text-white/70 transition hover:text-white my-10">
            <span aria-hidden="true">←</span>
            Go to Home
        </Link>
    );
}