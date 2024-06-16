import React, {Component} from 'react';
import Home from "./Home.jsx";
import {navItems} from "../utils/constants.js";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contacts from "./Contacts.jsx";
import {Route, Routes} from "react-router-dom";

const Switcher = () => {

    // switch (currentPage) {
    //     case navItems[0].route:
    //         return <Home/>;
    //     case navItems[1].route:
    //         return <AboutMe/>;
    //     case navItems[2].route:
    //         return <StarWars/>;
    //     case navItems[3].route:
    //         return <Contacts/>;
    // }
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={`${navItems[0].route}/:heroId`} element={<Home/>}/>
            <Route path={`${navItems[1].route}/:heroId`} element={<AboutMe/>}/>
            <Route path={`${navItems[2].route}/:heroId`} element={<StarWars/>}/>
            <Route path={`${navItems[3].route}/:heroId`} element={<Contacts/>}/>
        </Routes>
    );

};

export default Switcher;