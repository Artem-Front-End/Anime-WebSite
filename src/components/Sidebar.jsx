import React from 'react';
import '.././styles/App.css';
import '../styles/Sidebar.css';

const Sidebar = ({animeCopy, remove}) => {
    return (
        <div className={'sidebar'} >
            <h1 style={{textAlign: 'center'}} >Your List</h1>
            {
                animeCopy.length
                ?  animeCopy.map(item => {
                        return <div key={item.title} className={'item-card'} >
                            <img src={item.img} />
                            <h2>{item.title}</h2>
                            <button onClick={() => remove(item)} >X</button>
                        </div>
                    })
                : <h2 style={{marginTop: 20}} >List is empty</h2>
            }
        </div>
    );
};

export default Sidebar;