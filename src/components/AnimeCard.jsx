import React from 'react';
import crunchy_logo from "../assets/crunchyroll.svg"
import mal_logo from "../assets/myanimelist.svg"

const AnimeCard = ({name, mal_link, crunchy_link, img_path}) => {
    return (
        <div className='anime-card'>
            <h1 className='card-title'>{name}</h1>
            <div className='card-image-container'>
                <img className='card-image' src={img_path} alt={name}></img>
            </div>
            <div className='button-container'>
                <button className='button-left' onClick={() => {window.open(mal_link)}}>
                    <img className="button_logo" src={mal_logo}/>   
                </button>
                <button className='button-right' onClick={() => {window.open(crunchy_link)}}>
                    <img className="button_logo" src={crunchy_logo} />
                </button>
            </div>
        </div>
    );
};

export default AnimeCard;