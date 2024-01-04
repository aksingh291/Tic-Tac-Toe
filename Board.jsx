import React from 'react';
import Container from './Container';
import './Board.css';

export const Board = ({ board, onClick }) => {
    return (
        <div className='boardContainer'>
            <div className='boardWrapper'>
                <div className='board'>
                    {board.map((value, idx) => {
                        return <Container key={idx} value={value} onClick={() => value === null && onClick(idx)} />;
                    })}
                </div>
            </div>
        </div>
    );
    
};
