import React from 'react';
import AnimeList from "./AnimeList";
import Pagination from "./Pagination";

const AnimePage = ({currentAnime, createCopy, openModal, limit, arr, pagination}) => {
    return (
        <div>
            <AnimeList anime={currentAnime} create={createCopy} openModal={openModal} />
            <Pagination limit={limit} total={arr.length} pagination={pagination} />
        </div>
    );
};

export default AnimePage;