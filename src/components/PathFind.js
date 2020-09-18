import React, { useEffect, useState } from 'react';
import Node from './Node';
import "./PathFind.css";

const cols = 25;
const rows = 10;


const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = rows - 1;
const NODE_END_COL = cols - 1;

export default function PathFind() {

    // to create and set the grids i.e basically the nodes
    const [Grid, setGrid] = useState([]);

    useEffect(() => {
        initiazeGrid();
    },[]);

    // SPOT constructor
    function Spot(i, j) {

        this.x = i;
        this.y = j;

        this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
        this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;

        // COST valriables
        this.g = 0;
        this.f = 0;
        this.h = 0;

        
    }

    // creating a 2D array (better way may exist!)
    const initiazeGrid = () => {
        const grid = new Array(rows);

        for (let i = 0; i < cols; i++) {
            grid[i] = new Array(cols);
        }

        createSpot(grid);
        setGrid(grid);
    }

    const createSpot = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j] = new Spot(i, j);
            }
        }
    }


    // GRID with NODES
    const gridWithNodes = (
        <div>
            {Grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className="rowWrapper">
                        {row.map((col, colIndex) => {
                            const { isStart, isEnd } = col;
                            return <Node key={colIndex} isStart={isStart} isEnd={isEnd} row={rowIndex} col={colIndex}/>
                        })}
                    </div>
                )
            })}
        </div>
    )

    return (
        <div className="wrapper">
            {gridWithNodes}
        </div>
    )
}
