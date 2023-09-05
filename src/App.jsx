import { useEffect, useState } from "react";
import { fetchData } from "./services/api";
import { genderObj, speciesObj, statusObj } from "./data/filterOptions";

import CharacterWrapper from "./components/CharacterWrapper";
import Search from "./components/Search";
import DropDown from "./components/DropDown";

function App() {
    const [characterData, setCharacterData] = useState(null);

    const [selectedGender, setSelectedGender] = useState("");
    const [selectedSpecies, setSelectedSpecies] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [nameSearch, setNameSearch] = useState("");
    const [currentPage, setPage] = useState(1);

    useEffect(() => {
        // Reset page to first when any of the otehr filter options change
        setPage(1);
    }, [selectedGender, selectedSpecies, selectedStatus, nameSearch]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const res = await fetchData("", {
                    gender: selectedGender,
                    species: selectedSpecies,
                    status: selectedStatus,
                    name: nameSearch,
                    page: currentPage,
                });
                setCharacterData(
                    res.data ? res.data : { info: null, results: [] }
                );
            } catch (error) {
                console.log(error);
            }
        };

        fetchCharacters();
    }, [
        currentPage,
        nameSearch,
        selectedGender,
        selectedSpecies,
        selectedStatus,
    ]);

    return (
        <div className="max-w-5xl mx-5 sm:mx-10 lg:mx-auto   mb-5  text-white">
            <h1 className=" text-center my-6 text-xl sm:text-3xl uppercase font-bold tracking-tight text-text ">
                Rick & Morty
            </h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-between ">
                    <Search setNameSearch={setNameSearch} />
                    <DropDown
                        optionsObj={genderObj}
                        selectedValue={selectedGender}
                        setSelectedValue={setSelectedGender}
                    />
                </div>
                <div className="flex flex-col justify-between gap-2 sm:gap-6">
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
                </div>
            </div>
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
            {characterData && (
                <CharacterWrapper
                    data={characterData}
                    setPage={setPage}
                    currentPage={currentPage}
                />
            )}
        </div>
    );
}

export default App;
