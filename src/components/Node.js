import React from 'react'
import "./Node.css"

export default function Node({isStart, isEnd, row, col, isWall}) {

    // row and col are used to find the position of a certain box

    const classes = isStart ? "node-start" : 
                            isWall ? "node-wall" :
                                isEnd ? "node-end" : "";
    return (
        <div className={`node ${classes}`} id={`node-${row}-${col}`} >
            
        </div>
    )
}
