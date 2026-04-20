import { BASE_BTN, ACTIVE_BTN, INACTIVE_BTN } from "../../../utils/constants";

function CategoryFilter({ activeFilter, setActiveFilter, options, toLabel }) {
    return (
        <div className="flex flex-wrap gap-2 mb-8 mt-10">
            {options.map((option) => (
                <button
                    key={option}
                    type="button"
                    onClick={() => setActiveFilter(option)}
                    className={`${BASE_BTN} ${activeFilter === option ? ACTIVE_BTN : INACTIVE_BTN}`}
                >
                    {toLabel(option)}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;
