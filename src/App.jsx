import { useEffect, useContext, useState } from "react";
import { fetchData } from "./services/api";
import { genderObj, speciesObj, statusObj } from "./data/filterOptions";

import CharacterWrapper from "./components/CharacterWrapper";
import Search from "./components/Search";
import DropDown from "./components/DropDown";

// Not context provider component
import { CharacterListContext } from "./components/context/CharacterListContext";

function App() {
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedSpecies, setSelectedSpecies] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [nameSearch, setNameSearch] = useState("");

    const { characterData, setCharacterData } =
        useContext(CharacterListContext);

    useEffect(() => {
        const fetchCharacters = async () => {
            const res = await fetchData("", {
                gender: selectedGender,
                species: selectedSpecies,
                status: selectedStatus,
                name: nameSearch,
            });
            setCharacterData(res ? res.data : { info: null, results: [] });
        };

        fetchCharacters();
    }, [nameSearch, selectedGender, selectedSpecies, selectedStatus]);

    return (
        <div className="max-w-5xl mx-5 sm:mx-10 lg:mx-auto   mb-5  text-white">
            <h1 className=" text-center my-6 text-xl sm:text-3xl uppercase font-bold tracking-tight text-text ">
                Rick & Morty
            </h1>
            <Search setNameSearch={setNameSearch} />
            <DropDown
                optionsObj={genderObj}
                selectedValue={selectedGender}
                setSelectedValue={setSelectedGender}
            />
            <DropDown
                optionsObj={speciesObj}
                selectedValue={selectedSpecies}
                setSelectedValue={setSelectedSpecies}
            />
            <DropDown
                optionsObj={statusObj}
                selectedValue={selectedStatus}
                setSelectedValue={setSelectedStatus}
            />
            {characterData && (
                <p className="my-3">
                    You´re looking for{" "}
                    {nameSearch ? (
                        <>
                            someone named{" "}
                            <span className="font-bold">{nameSearch}</span>
                        </>
                    ) : (
                        `anyone`
                    )}{" "}
                    with
                    {selectedGender === "" ? (
                        " any gender"
                    ) : (
                        <>
                            {" "}
                            a{" "}
                            <span className="font-bold">
                                {selectedGender}
                            </span>{" "}
                            gender
                        </>
                    )}{" "}
                    of
                    {selectedSpecies === "" ? (
                        " any species"
                    ) : (
                        <>
                            {" "}
                            a{" "}
                            <span className="font-bold">
                                {selectedSpecies}
                            </span>{" "}
                            species
                        </>
                    )}{" "}
                    with
                    {selectedStatus === "" ? (
                        " any status"
                    ) : (
                        <>
                            {" "}
                            the status{" "}
                            <span className="font-bold">{selectedStatus}</span>
                        </>
                    )}
                </p>
            )}
            {characterData && <CharacterWrapper data={characterData} />}
        </div>
    );
}

export default App;
