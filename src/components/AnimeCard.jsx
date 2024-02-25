import React from 'react';
import cardImg from "../assets/sololeveling.jpg"

const AnimeCard = ({name}) => {
    return (
        <div className='anime-card'>
            <h1 className='card-title'>{name}</h1>
            <div className='card-image-container'>
                <img className='card-image' src={cardImg}></img>
            </div>
            <div className='button-container'>
                <button className='button'>MAL</button>
                <button className='button'>Crunchyroll</button>
            </div>
        </div>
    );
};

export default AnimeCard;