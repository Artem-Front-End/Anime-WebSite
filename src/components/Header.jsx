import React from 'react';
import {NavLink} from "react-router-dom";
import './../styles/App.css';

const Header = ({search, setSearch}) => {
    return (
        <header>
            <h1><NavLink to={'/home'}>Anime List</NavLink></h1>
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={'Search...'}
                className={'inputSearch'}
            />
            <ul>
                <li><NavLink to={'/home'}>Home</NavLink></li>
                <li><NavLink to={'/anime'}>Anime</NavLink></li>
            </ul>
        </header>
    );
};

export default Header;