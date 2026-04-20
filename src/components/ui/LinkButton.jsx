import { Link } from "react-router-dom";

export const LinkButton = ({ to, text }) => {
    return (
        <Link
            to={to}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
        >
            {text}
            <span aria-hidden="true">→</span>
        </Link>
    );
}