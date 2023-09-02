import CharacterCard from "./CharacterCard";

const CharacterWrapper = ({ data, setPage, page }) => {
    const numPages = data.info.pages;

    console.log("choosen page", page);

    return (
        <div>
            {data.results.length === 0 ? (
                <p className="my-2">Oops... No characters match your search</p>
            ) : (
                <>
                    <p className="text-center mb-4 text-sm md:text-base ">
                        <span className="uppercase font-bold">Characters:</span>{" "}
                        {data.info.count}
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {data.results.map((char) => {
                            return (
                                <CharacterCard key={char.id} charData={char} />
                            );
                        })}
                    </div>
                    <ul className="flex flex-wrap mt-10">
                        {[...Array(numPages)].map((el, index) => {
                            return (
                                <li
                                    className={`p-2 hover:cursor-pointer ${
                                        page === index + 1 &&
                                        "text-zinc-500 border-b-2 border-zinc-500 "
                                    }`}
                                    key={"page" + index}
                                    onClick={() => setPage(index + 1)}
                                >
                                    {index + 1}
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}
        </div>
    );
};

export default CharacterWrapper;
