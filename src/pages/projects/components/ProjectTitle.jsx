export const ProjectTitle = ({ title }) => {
    return (
        <div className="flex items-start justify-between gap-3 mb-4">
            <h3 className="text-xl font-semibold text-white">
                {title}
            </h3>
        </div>
    );
}