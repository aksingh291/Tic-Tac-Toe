import React from 'react'
import "./Restart.css"

export const Restart = ({ reset }) => {
    return (
        <div className='d'>
            <div className='c'>
                <button className='reset-btn' onClick={reset}>Restart</button>
                <button className='reset-btn' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}