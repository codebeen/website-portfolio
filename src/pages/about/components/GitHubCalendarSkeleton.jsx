import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function GitHubCalendarSkeleton() {
    return (
        <SkeletonTheme baseColor="#1f2937" highlightColor="#374151">
            <div className="space-y-2">
                <Skeleton height={12} width={100} />
                <Skeleton height={120} />
            </div>
        </SkeletonTheme>
    );
}

export default GitHubCalendarSkeleton;
