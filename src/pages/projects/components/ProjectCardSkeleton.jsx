import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProjectCardSkeleton() {
    return (
        <SkeletonTheme baseColor="#1f2937" highlightColor="#374151">
            <div className="flex h-full flex-col border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden">
                <Skeleton height={192} borderRadius={0} />
                <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                        <Skeleton width="70%" height={24} />
                        <Skeleton width={20} height={20} circle />
                    </div>
                    <div className="mb-4">
                        <Skeleton count={3} height={14} className="mb-1" />
                    </div>
                    <div className="flex gap-2 flex-wrap mb-4">
                        <Skeleton width={70} height={24} borderRadius={6} />
                        <Skeleton width={80} height={24} borderRadius={6} />
                        <Skeleton width={90} height={24} borderRadius={6} />
                        <Skeleton width={75} height={24} borderRadius={6} />
                    </div>
                    <div className="mt-auto pt-4 border-t border-white/5">
                        <Skeleton width={140} height={16} />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default ProjectCardSkeleton;
