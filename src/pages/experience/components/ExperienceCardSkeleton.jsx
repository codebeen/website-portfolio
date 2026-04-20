import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ExperienceCardSkeleton() {
    return (
        <SkeletonTheme baseColor="#1f2937" highlightColor="#374151">
            <div className="rounded-lg p-4 bg-white/[0.03]">
                <div className="flex items-center gap-2 mb-1.5">
                    <Skeleton width={60} height={18} borderRadius={4} />
                    <Skeleton width={140} height={16} />
                </div>
                <Skeleton width={180} height={12} className="mt-1" />
                <Skeleton width="90%" height={12} className="mt-2" />
                <Skeleton width="70%" height={12} className="mt-1" />
            </div>
        </SkeletonTheme>
    );
}

export default ExperienceCardSkeleton;
