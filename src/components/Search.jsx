import { useState, useContext } from "react";
import { fetchData } from "../services/api";

// Not context provider component
import { CharacterListContext } from "./context/CharacterListContext";

const Search = () => {
    const [searchValue, setSearchValue] = useState("");

    const { setCharacterData } = useContext(CharacterListContext);

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log(searchValue);

        try {
            const res = await fetchData("", { name: searchValue });
            console.log(res);
            setCharacterData(res ? res.data : { info: null, results: [] });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex flex-col my-4">
            <label htmlFor="searchInput" className="font-bold">
                Search:
            </label>
            <input
                id="searchInput"
                type="text"
                className="rounded-lg bg-neutral-600 py-1 px-4 w-1/4"
                placeholder="Search for name"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </form>
    );
};

export default Search;
