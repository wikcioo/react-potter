import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://hp-api.herokuapp.com/api/characters";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
