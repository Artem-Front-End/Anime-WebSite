import React from 'react';
import '../styles/Home.css';

const Home = ({anime}) => {

    const arr = anime.slice(4, 9);

    return (
        <div>
          <div className={'background'} >
              <img src={'https://i.pinimg.com/originals/cc/92/78/cc9278edc853b417705745d397d792eb.jpg'} />
          </div>
            <div>
                <h1 className={'trendingText'} >Trending now</h1>
                <div className={'trendingBlock'} >
                    {
                        arr.map(item => {
                            return <div key={item.id} className={'trend'} >
                                <img src={item.img} />
                                <h1>{item.title}</h1>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;