import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CharacterListContextProvider } from "./components/context/CharacterListContext";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CharacterListContextProvider>
            <App />
        </CharacterListContextProvider>
    </React.StrictMode>
);
