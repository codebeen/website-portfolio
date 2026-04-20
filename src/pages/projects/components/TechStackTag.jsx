export const TechStackTag = ({ key, technology }) => {
    return (
        <span
            key={key}
            className="px-3 py-1 text-xs font-medium rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
        >
            {technology.name}
        </span>
    );
}