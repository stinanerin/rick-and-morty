import { useEffect, useContext } from "react";
import { fetchData } from "./services/api";

import CharacterWrapper from "./components/CharacterWrapper";
import Search from "./components/Search";

// Not context provider component
import { CharacterListContext } from "./components/context/CharacterListContext";

function App() {
    console.log("hej");

    const { characterData, setCharacterData } =
        useContext(CharacterListContext);

    useEffect(() => {
        const fetchCharacters = async () => {
            const res = await fetchData();
            setCharacterData(res.data);
        };

        fetchCharacters();
    }, [setCharacterData]);

    return (
        <div className="max-w-5xl mx-5 sm:mx-10 lg:mx-auto   mb-5  text-white">
            <h1 className=" text-center my-6 text-xl sm:text-3xl uppercase font-bold tracking-tight text-text ">
                Rick & Morty
            </h1>
            <Search />
            {characterData && <CharacterWrapper data={characterData} />}
        </div>
    );
}

export default App;
