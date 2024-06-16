import React, {useContext, useEffect} from 'react';
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import Story from "./Story.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {CharContext} from "../utils/useContext.js";
import {characters} from "../utils/characters.js";
import {defaultHero, navItems} from "../utils/constants.js";


const Home = () => {
    const {heroId} = useParams();
    const {hero, setHero} = useContext(CharContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!Object.keys(characters).includes(heroId)) {
            navigate(`/${navItems[0].route}/${defaultHero}`);
        } else {
            setHero(heroId);
        }
    }, [heroId]);

    console.log(heroId);

    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <Story/>
        </main>
    );
};

export default Home;