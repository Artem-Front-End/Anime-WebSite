import React from 'react';
import '../styles/Anime.css';
import Modal from "./UI/Modal";

const AnimeList = ({anime, create, openModal}) => {

    const createCopy = anime => {
        create(anime)
    }

    const open = item => {
        openModal(item);
    }

    return (
        <div className={'animeList'} >
            {
                anime.length
                ? anime.map(item => {
                        return <div className={'animeBlock'} key={item.id} >
                            <img src={item.img} />
                            <h2>{item.title}</h2>
                            <hr />
                            <div style={{display: 'flex', justifyContent:'space-around'}} >
                                <p>{item.type}</p>
                                <p>{item.year}</p>
                            </div>
                            <button className={'btnAdd'} onClick={() => createCopy(item)} >Add to list</button>
                            <button onClick={() => open(item)} >Info</button>
                        </div>
                    })
                : <h1 style={{textAlign: 'center'}} >Didn't find!</h1>
            }
        </div>
    );
};

export default AnimeList;