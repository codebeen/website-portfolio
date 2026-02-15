
function Summary({ total, title, delay = 200 }) {
    return (
        <>
            <div className="frame text-center"
                data-aos="fade-up"
                data-aos-delay={delay}
            >
                <div className="text-4xl font-bold text-violet-400">
                    {total}+
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-white/50">
                    {title}
                </div>
            </div>
        </>
    );
}

export default Summary;