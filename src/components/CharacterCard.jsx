const CharacterCard = ({ charData }) => {
    console.log(charData);

    const { image, name, gender, status, species } = charData;

    return (
        <div className="p-3 bg-neutral-700 rounded-md hover:bg-neutral-600 hover:cursor-pointer	">
            <img className="rounded-md" src={image} alt={`Image of ${name}`} />
            <h2>{name}</h2>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Status: {status}</p>
        </div>
    );
};

export default CharacterCard;
