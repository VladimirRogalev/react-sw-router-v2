import React, {useEffect, useState} from 'react';
import styles from "../css/aboutMe.module.css";
import {BASE_URL, period_month} from "../utils/constants.js";

const AboutMe = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [character, setCharacter] = useState({});

    useEffect(() => {
        console.log("AboutMe mount")
        const character = JSON.parse(localStorage.getItem("character"));
        if (character && (Date.now() - character.time) < period_month) {
            setIsLoading(false);
            setCharacter(character.payload);
        } else {
            fetch(`${BASE_URL}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const hero = {
                        name: data.name,
                        eye_color: data.eye_color,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        image: `${BASE_URL}/${data.image}`
                    };
                    setIsLoading(false);
                    setCharacter(hero);
                    const info = {
                        payload: hero,
                        time: Date.now()
                    }
                    localStorage.setItem("character", JSON.stringify(info))
                })
        }
        return ()=>{
            console.log("AboutMe unmounted")
        }
    }, []);

    if (isLoading) {
        return (
            <div className="spinner-border text-success"></div>
        )
    } else {
        return (
            <div className={styles.hero_box}>
                <h1>Name:{character.name}</h1>
                <h2>eye_color: {character.eye_color}</h2>
                <h3>gender: {character.gender}</h3>
                <h4>birth_year: {character.birth_year}</h4>
                <img className={styles.img_hero} src={character.image} alt={'hero'}/>
            </div>
        );
    }
}

export default AboutMe;