import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://hp-api.herokuapp.com/api/characters";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [characters, setCharacters] = useState([]);

    const filterData = (data) => {
        const filteredData = data.filter((d) =>
            d.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return filteredData;
    };

    const fetchCharacters = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            const filteredData = filterData(data);
            if (filteredData.length === 0) {
                setCharacters([]);
            } else {
                const newCharacters = filteredData.map((item) => {
                    const { name, actor, house, patronus, image } = item;
                    return {
                        name,
                        actor,
                        house,
                        patronus,
                        image,
                    };
                });
                setCharacters(newCharacters);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, [searchTerm]);

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
