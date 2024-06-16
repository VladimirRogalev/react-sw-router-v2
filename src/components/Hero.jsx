import React, {Component, useContext} from 'react';
import {CharContext} from "../utils/useContext.js";
import {characters} from "../utils/characters.js";

const Hero = () => {
    const {hero} = useContext(CharContext);
    return (
        <section className="float-start me-3 w-25">
            <img className="w-100" src={characters[hero].img} alt="hero"/>
        </section>
    );
};

export default Hero;