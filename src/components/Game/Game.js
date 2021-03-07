import React, { useState, useEffect } from 'react';
// import { calculateWinner } from '../../helpers';
import Board from '../Board/Board';
import Square from '../Square/Square';
import './Game.css'

const Game = () => {

    const [board, setBoard] = useState(Array(2500).fill(null));
    const [firstClick, setFirstClick] = useState();
    const [secondClick, setSecondClick] = useState();

    useEffect(() => {
        if (firstClick) {
            let clickedSquare = document.getElementById('first-click')
            console.log(clickedSquare);
            clickedSquare.style.backgroundColor = 'black';
        }

        if (secondClick)  {
            let clickedSquare = document.getElementById('second-click')
            console.log(clickedSquare);
            clickedSquare.style.backgroundColor = 'black';
        }
        
    }, [firstClick, secondClick]);


    const handleClick = (i) => {
        const copyOfBoard = [...board];

        if (firstClick) {
            document.getElementsByTagName('button')[i].id = 'second-click';
            setSecondClick(i);
            setBoard(copyOfBoard);

        } else {
            document.getElementsByTagName('button')[i].id = 'first-click';
            setFirstClick(i);
            setBoard(copyOfBoard);
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