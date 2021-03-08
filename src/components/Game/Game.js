import React, { useState, useEffect } from 'react';
// import { calculateWinner } from '../../helpers';
import Board from '../Board/Board';
import Square from '../Square/Square';
import './Game.css'

const Game = () => {

    const [board, setBoard] = useState(Array(2500).fill(null));
    const [firstClick, setFirstClick] = useState(false);
    const [secondClick, setSecondClick] = useState(false);

    useEffect(() => {
        if (secondClick) {
            let clickedSquare = document.getElementById('second-click');
            clickedSquare.style.backgroundColor = 'black';
            return;
        }

        if (firstClick) {
            let clickedSquare = document.getElementById('first-click');
            clickedSquare.style.backgroundColor = 'black';
            return;
        }
    }, [firstClick, secondClick]);

    const handleClick = (i) => {
        const copyOfBoard = [...board];

        if (firstClick) {
            document.getElementsByTagName('button')[i].id = 'second-click';
            setSecondClick(true);
            setBoard(copyOfBoard);
            console.log(getRowCol(i));

        } else {
            document.getElementsByTagName('button')[i].id = 'first-click';
            setFirstClick(true);
            setBoard(copyOfBoard);
            console.log(getRowCol(i));
        }
    }

    const getRowCol = (i) => {
        const row = Math.floor(i / 50);

        if (i < 50) {
            const col = i;
            return [row, col];
        } else {
            let counter = 0;
            while (counter + 50 <= i) {
                counter += 50
            }
            if (counter == i) {
                const col = 0;
                return [row, col];
            } else {
                const col = (i - counter);
                return [row, col];
            }
        }
    } 

    return (
        <>
            <div className={'title'}>Pathfinding Visualizer</div>
                <ol className={'instructions'}>
                    <li>Click on a starting square and then a click a
                    square to end on</li>
                    <li>Choose an algorithm</li>
                    <li>Click "Begin" to find a path between the two</li>
                </ol>
            <Board squares={board} onClick={handleClick} />
        </>
    )
}

export default Game;