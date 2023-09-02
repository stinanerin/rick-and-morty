import { createContext, useState } from "react";
export const CharacterListContext = createContext();

export const CharacterListContextProvider = (props) => {
    const [characterData, setCharacterData] = useState(null);

    return (
        <CharacterListContext.Provider
            value={{ characterData, setCharacterData }}
        >
            {
                // Add props children as to be able to wrap app in context.provider
            }
            {props.children}
        </CharacterListContext.Provider>
    );
};
