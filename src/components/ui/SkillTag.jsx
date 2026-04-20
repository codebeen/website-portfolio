export const SkillTag = ({ skill }) => {
    return (
        <div className="">
            <span className="inline-block px-4 py-2 bg-[var(--card-bg)] border border-blue-400 rounded hover:border-blue-500 hover:bg-muted transition-all duration-200 text-foreground text-sm font-mono">
                {skill}
            </span>
        </div>
    );
}