import GitHubCalendarSkeleton from "./GitHubCalendarSkeleton";
import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";

export const GithubContribution = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 100);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="py-5 w-full" data-aos="fade-up" data-aos-delay={100}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
                GitHub Contributions
            </p>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">
                {loading ? (
                    <GitHubCalendarSkeleton />
                ) : (
                    <GitHubCalendar username="codebeen" />
                )}
            </div>
        </div>
    );
};
