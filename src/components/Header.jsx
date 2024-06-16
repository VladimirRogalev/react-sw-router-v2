import React, {useContext} from 'react';
import Navigation from "./Navigation.jsx";
import {CharContext} from "../utils/useContext.js";
import {characters} from "../utils/characters.js";
// TODO Class -> func
const Header = () => {
const {hero} = useContext(CharContext)

    return (
        <header>
            <Navigation/>
            <h1 className="text-center py-4">{characters[hero].name}</h1>
        </header>
    );

};

export default Header;