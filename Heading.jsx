

import React, { useState } from 'react';
import './Heading.css';
import info from './images.png';

export const Heading = () => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="heading">
            <h1>
                Tic Tac Toe
                <button className="info-button" onClick={toggleDetails}>
                    <img src={info} alt="Info" />
                </button>
            </h1>
            {showDetails && (
                <div className="overlay">
                    <div className="details">
                        <p>This is a simple Tic Tac Toe game.</p>
                        <p>Tic Tac Toe is a classic two-player game where the goal is to form a line of three of your own symbols (either "X" or "O") horizontally, vertically, or diagonally on a 3x3 grid.</p>
                        <button onClick={toggleDetails}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};



