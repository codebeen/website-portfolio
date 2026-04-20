export const HeroBadge = ({ text }) => {
    return (
        <div className="flex justify-center sm:justify-start sm:mb-0 mb-5">
            <span className="rounded-full bg-[var(--accent-400)]/20 px-3 py-1 text-xs font-semibold text-[var(--accent-400)]">
                {text}
            </span>
        </div>
    );
}