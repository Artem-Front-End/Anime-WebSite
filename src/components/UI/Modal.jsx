import React from 'react';
import './Modal.css';

const Modal = ({active, setActive, text}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)} >
            <div className={'modalContent'} onClick={e => e.stopPropagation()} >
                {
                    text
                }
            </div>
        </div>
    );
};

export default Modal;