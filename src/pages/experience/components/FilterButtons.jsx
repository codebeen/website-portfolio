import { BASE_BTN, ACTIVE_BTN, INACTIVE_BTN } from "../../../utils/constants";

function FilterButtons({ active, setActive, options }) {
    return (
        <div className="flex flex-wrap gap-2 mb-8 mt-8">
            {options.map((label) => (
                <button
                    key={label}
                    type="button"
                    onClick={() => setActive(label)}
                    className={`${BASE_BTN} ${active === label ? ACTIVE_BTN : INACTIVE_BTN}`}
                >
                    <span className="relative z-10">{label}</span>
                </button>
            ))}
        </div>
    );
}

export default FilterButtons;
