
function Summary({ total, title, delay = 200 }) {
    return (
        <>
            <div
                className="border border-white/10 bg-white/5 p-4 rounded text-center"
                data-aos="fade-up"
                data-aos-delay={delay}
            >
                <div className="text-3xl font-bold text-blue-500">{total}+</div>
                <div className="mt-2 text-sm uppercase tracking-wider text-white/50">
                    {title}
                </div>
            </div>
        </>
    );
}

export default Summary;