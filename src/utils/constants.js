import {characters} from "./characters.js";

export const BASE_URL = "https://sw-info-api.herokuapp.com";

export const period_month = 30 * 24 * 60 * 60 * 1000;

export const defaultHero = Object.keys(characters)[0]

export const navItems = [
    {
        name: "Home",
        route: "home"
    },
    {
        name: "About Me",
        route: "aboutMe"
    },
    {
        name: "Star Wars",
        route: "starWars"
    },
    {
        name: "Contact",
        route: "contact"
    }];