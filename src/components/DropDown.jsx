import { toUpperCaseStr } from "../utility/helpers";

const DropDown = ({ optionsObj, setSelectedValue }) => {
    const { filter, arr } = optionsObj;

    const handleFilter = (e) => {
        let selectedOption = e.target.value;
        if (selectedOption === "All") selectedOption = "";
        setSelectedValue(selectedOption);
    };

    return (
        <div className="flex flex-col">
            <label className="font-bold" htmlFor={`filterBy${filter}`}>
                {toUpperCaseStr(filter)}:
            </label>
            <select
                id={`filterBy${filter}`}
                className="rounded-md bg-neutral-600 py-1 px-2 w-1/4"
                onChange={handleFilter}
            >
                {arr.map((opt, index) => {
                    return <option key={opt + index}>{opt}</option>;
                })}
            </select>
        </div>
    );
};

export default DropDown;
