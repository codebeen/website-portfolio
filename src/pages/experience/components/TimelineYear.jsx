function TimelineYear({ year }) {
    return (
        <div className="sticky flex flex-col md:flex-row z-50 items-center top-24 self-start max-w-xs lg:max-w-sm md:w-full h-fit">
            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border border-white/20" />
            </div>
            <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-white/80">
                {year}
            </h3>
        </div>
    );
}

export default TimelineYear;
