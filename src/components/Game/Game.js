import React, { useState } from 'react';
import { calculateWinner } from '../../helpers';
import Board from '../Board/Board';

const Game = () => {

    const [board, setBoard] = useState(Array(2500).fill(null));
    const [firstClick, setFirstClick] = useState(false);
    const [secondClick, setSecondClick] = useState(false);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        if (firstClick) {
            setSecondClick(true);
            console.log('Second Click', i)
        } else {
            setFirstClick(true);
            console.log('First Click', i)
        }
    }

    const renderMoves = () => {

    }


    return (
        <Board squares={board} onClick={handleClick} />
    )
}

export default Game;