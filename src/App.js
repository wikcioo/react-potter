import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import SingleCharacter from "./pages/SingleCharacter";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
function App() {
    return (
        <div>
            <h2>app component</h2>
        </div>
    );
}

export default App;
