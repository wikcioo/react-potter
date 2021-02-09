import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://hp-api.herokuapp.com/api/characters";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("a");
    const [characters, setCharacters] = useState([]);

    return (
        <AppContext.Provider
            value={{
                loading,
                characters,
                setSearchTerm,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
