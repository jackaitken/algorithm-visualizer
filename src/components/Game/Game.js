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
            console.log(copyOfBoard);

        } else {
            setFirstClick(true);
            copyOfBoard[i] = '#'
            setBoard(copyOfBoard)
            console.log(copyOfBoard);
        }
    }

    const renderClick = (i) => {

    }

    return (
        <>
            <div className={'title'}>Pathfinding Visualizer</div>
                <p className={'instructions'}>
                First click on a starting square and then a click a
                square to end on, then click "Begin" to find a path between 
                the two.
                </p>
            <Board squares={board} onClick={handleClick} />
        </>
    )
}

export default Game;