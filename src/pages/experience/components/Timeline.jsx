import { useEffect, useRef, useState } from "react";
import TimelineGroup from "./TimelineGroup.jsx";

function Timeline({ filteredTimeline, loading, typeStyles, toLabel }) {
    const [progress, setProgress] = useState(0);
    const timelineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) {
                return;
            }

            const rect = timelineRef.current.getBoundingClientRect();
            const total = rect.height + window.innerHeight;
            const current = window.innerHeight - rect.top;
            const nextProgress = Math.min(Math.max(current / total, 0), 1);

            setProgress(nextProgress);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div
            ref={timelineRef}
            className="timeline-wrap space-y-12"
            style={{ "--timeline-progress": progress }}
        >
            <div className="timeline-line" aria-hidden="true">
                <span className="timeline-trace" />
            </div>
            {filteredTimeline.map((group) => (
                <TimelineGroup
                    key={group.year}
                    group={group}
                    loading={loading}
                    typeStyles={typeStyles}
                    toLabel={toLabel}
                />
            ))}
        </div>
    );
}

export default Timeline;
