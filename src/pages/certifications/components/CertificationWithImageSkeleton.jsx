import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CertificationWithImageSkeleton() {
    return (
        <SkeletonTheme baseColor="#1f2937" highlightColor="#374151">
            <div className="flex h-full flex-col border border-white/10 rounded-2xl overflow-hidden">
                <Skeleton height={240} borderRadius={0} />
                <div className="p-5">
                    <div className="flex justify-between">
                        <Skeleton width={80} height={12} />
                        <Skeleton width={60} height={12} />
                    </div>
                    <Skeleton width="65%" height={24} className="mt-4" />
                    <Skeleton width={130} height={36} borderRadius={999} className="mt-5" />
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default CertificationWithImageSkeleton;
