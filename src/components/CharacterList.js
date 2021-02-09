import React from "react";
import Character from "./Character";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CharacterList = () => {
    const { characters, loading } = useGlobalContext();

    if (loading) {
        return <Loading />;
    }

    if (characters.length < 1) {
        return (
            <h2 className="section-title">
                no characters matches your search criteria
            </h2>
        );
    }

    return (
        <div>
            <h2>cocktail list component</h2>
        </div>
    );
};

export default CharacterList;
