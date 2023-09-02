import { useEffect, useState } from "react";
import CharacterWrapper from "./components/CharacterWrapper";
import { fetchData } from "./services/api";

function App() {
    // Initialize, to empty obejct
    const [characterData, setCharacterData] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            const res = await fetchData();
            setCharacterData(res.data);
        };

        fetchCharacters();
    }, []);

    return (
        <div className="max-w-5xl mx-5 sm:mx-10 lg:mx-auto   mb-5  text-white">
            <h1 className=" text-center my-6 text-xl sm:text-3xl uppercase font-bold tracking-tight text-text ">
                Rick & Morty
            </h1>
            {characterData && <CharacterWrapper data={characterData} />}
        </div>
    );
}

export default App;
