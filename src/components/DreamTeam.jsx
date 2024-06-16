import React, {useContext} from "react";
import Friend from "./Friend.jsx";
import {characters} from "../utils/characters.js";
import {CharContext} from "../utils/useContext.js";

const DreamTeam = () => {
    const {hero} = useContext(CharContext);
    return (
        <section className="float-end w-50 row border mx-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {Object.keys(characters).filter(f => f !== hero)
                .map((f, i) => <Friend key={i} friend={f} pos={i + 1}/>)}
        </section>
    );
};

export default DreamTeam;