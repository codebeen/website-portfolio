import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CertificationCardSkeleton() {
    return (
        <SkeletonTheme baseColor="#1f2937" highlightColor="#374151">
            <div className="rounded-lg border border-white/10 p-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <Skeleton width="70%" height={16} />
                        <div className="flex gap-2 mt-2">
                            <Skeleton width={80} height={12} />
                            <Skeleton width={60} height={12} />
                        </div>
                    </div>
                    <Skeleton width={20} height={20} />
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default CertificationCardSkeleton;
