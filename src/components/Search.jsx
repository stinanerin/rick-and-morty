import { useState } from "react";

const Search = ({ setNameSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log(searchValue);
        setNameSearch(searchValue);
    };

    return (
        <form onSubmit={handleSearch} className="flex flex-col ">
            <label htmlFor="searchInput" className="font-bold">
                Search:
            </label>
            <input
                id="searchInput"
                type="text"
                className="rounded-md bg-neutral-600 py-1 px-2 sm:w-3/4"
                placeholder="Search for name"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </form>
    );
};

export default Search;
