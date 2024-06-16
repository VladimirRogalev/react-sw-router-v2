import React, {Component, useEffect, useState} from 'react';
import {BASE_URL} from "../utils/constants.js";

const Story = () => {
    const [openingCrawl, setOpeningCrawl] = useState('');

    useEffect(() => {
        //ComponentDidMount
        console.log('Mount Story')
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            setOpeningCrawl(opening_crawl);
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${BASE_URL}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                })
                .catch(e => {
                    console.log(e.message);
                })
        }
        return ()=>{
            console.log('Unmounted Story')
            //ComponentWillUnmount
        }
    },[]);
    // componentDidUpdate => []


    if (!openingCrawl) {
        return (
            <div className="spinner-border text-success"></div>
        )
    } else {
        return (
            <p className="farGalaxy">{openingCrawl}</p>
        );
    }
}

export default Story;