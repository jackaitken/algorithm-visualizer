import React, { useState } from 'react';
import { calculateWinner } from '../../helpers';
import Board from '../Board/Board';
import Square from '../Square/Square';
import './Game.css'

const Game = () => {

    const [board, setBoard] = useState(Array(2500).fill(null));
    const [firstClick, setFirstClick] = useState();
    const [secondClick, setSecondClick] = useState();

    const handleClick = (i) => {
        const copyOfBoard = [...board]

        if (firstClick) {
            setSecondClick(true);
            copyOfBoard[i] = '#'
            setBoard(copyOfBoard)
            console.log(Square[i]);

        } else {
            setFirstClick(true);
            copyOfBoard[i] = '#'
            setBoard(copyOfBoard)
            console.log(Square[i]);
        }
    }

    const renderClick = (i) => {

    }

    return (
        <>
            <div className={'title'}>Pathfinding Visualizer</div>
                <ol className={'instructions'}>
                    <li>Click on a starting square and then a click a
                    square to end on</li>
                    <li>Choose an algorithm</li>
                    <li>Click "Begin to find a path between the two</li>
                </ol>
            <Board squares={board} onClick={handleClick} />
        </>
    )
}

export default Game;