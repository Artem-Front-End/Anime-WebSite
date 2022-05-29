import React from 'react';
import '../styles/Anime.css';

const Pagination = ({limit, total, pagination}) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / limit); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={'pagination'} >
            <ul>
                {
                    pageNumbers.map(item => {
                        return <li key={item} >
                            <a onClick={() => pagination(item)} >{item}</a>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Pagination;