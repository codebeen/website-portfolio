import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function TechStackCardSkeleton() {
    return (
        <SkeletonTheme baseColor="#1f2937" highlightColor="#374151">
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5">
                <Skeleton width={40} height={40} borderRadius={8} />
                <Skeleton width={50} height={12} className="mt-2" />
            </div>
        </SkeletonTheme>
    );
}

export default TechStackCardSkeleton;
