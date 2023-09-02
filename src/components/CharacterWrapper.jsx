import CharacterCard from "./CharacterCard";

const CharacterWrapper = ({ data }) => {
    console.log(data);
    return (
        <div>
            <p className="text-center mb-4 text-sm md:text-base ">
                <span className="uppercase font-bold">Characters:</span>{" "}
                {data.info.count}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {data.results.map((char) => {
                    return <CharacterCard key={char.id} charData={char} />;
                })}
            </div>
        </div>
    );
};

export default CharacterWrapper;
