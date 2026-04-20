import TechStackCard from "./TechStackCard.jsx";
import TechStackCardSkeleton from "./TechStackCardSkeleton.jsx";

function TechStackGrid({ loading, stacks }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
            {loading
                ? Array(12)
                      .fill(0)
                      .map((_, i) => <TechStackCardSkeleton key={i} />)
                : stacks.map((stack, index) => (
                      <TechStackCard
                          key={stack.name}
                          stack={stack}
                      />
                  ))}
        </div>
    );
}

export default TechStackGrid;
