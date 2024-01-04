import React from 'react'

import "./ScoreBoard.css"

export const ScoreBoard = ({scores, xPlaying})=>{
    const {xScore, oScore} = scores;

    return (
        <div className='scoreboard'>

            {/* if x is playing .. o is inactive and vice versa */}

            <span className={'score x-score ${!xPlaying && "inactive" }'}>X - {xScore}</span>
            <span className={'score o-score ${xPlaying && "inactive" }'}>O - {oScore}</span>
        </div>
    )
}