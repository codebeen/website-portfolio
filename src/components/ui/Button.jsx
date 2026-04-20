const variants = {
    primary: "bg-blue-600 text-white shadow-sm hover:bg-blue-700",
    secondary: "bg-white/10 text-white hover:bg-white/20",
    outline: "border border-white/20 text-white/80 hover:border-white/40 hover:text-white",
};

export function Button({ variant = "primary", className = "", as: Tag = "button", children, ...props }) {
    return (
        <Tag
            className={`inline-flex items-center gap-2 rounded px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-md font-semibold transition ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </Tag>
    );
}
