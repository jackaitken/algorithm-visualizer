import React, { useState } from 'react';
import { calculateWinner } from '../../helpers';
import Board from '../Board/Board';

const Game = () => {

    const [board, setBoard] = useState(Array(2500).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        // Create shallow copy of board
        const copyOfBoard = [...board];

        if (winner || copyOfBoard[i]) {
            return;
        }

        copyOfBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(copyOfBoard);
        setXisNext(!xIsNext)
    }

    const renderMoves = () => {
        return <button onClick={() => setBoard}></button>
    }


    return (
        <Board squares={board} onClick={handleClick} />
    )
}

export default Game;