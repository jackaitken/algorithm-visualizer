import React, { useState, useEffect } from 'react';
import { findNeighbors, solve } from '../../StackAndQueue';
import Board from '../Board/Board';
import Square from '../Square/Square';
import './Game.css'

const Game = () => {

    const [board, setBoard] = useState(Array(2500).fill(null));
    const [firstClick, setFirstClick] = useState(null);
    const [secondClick, setSecondClick] = useState(null);
    const [solvedRoute, setSolvedRoute] = useState(null);
    const [beginButtonVisibility, setBeginButtonVisibility] = useState('none');
    const [clearBoardVisibility, setClearBoardVisibility] = useState('none');
    const [handleClickCounter, setHandleClickCounter] = useState(0);

    useEffect(() => {
        let clickedSquare;
        
        if (secondClick || secondClick === 0) {
            clickedSquare = document.getElementById('second-click');
            clickedSquare.style.backgroundColor = 'black';

        } else if (firstClick || firstClick === 0) {
            clickedSquare = document.getElementById('first-click');
            clickedSquare.style.backgroundColor = 'black';
        }
        
    }, [firstClick, secondClick]);

    useEffect(() => {
        const copyOfBoard = [...board];
        const solvedCells = [];
        if (solvedRoute) {
            if (solvedRoute != 'orange') {
                solvedRoute.forEach(cell => {
                    solvedCells.push(document.getElementsByTagName('button')[cell]);
                    copyOfBoard[cell] = cell;
                });
                
                solvedCells.forEach(function(cell, index) {
                    setTimeout(function() {
                        setSolvedRoute(cell.style.backgroundColor = 'orange');
                    }, 20 * (index + 1));
                })
            } else {
                console.log(solvedCells);
            }
        }
    }, [solvedRoute]);

    const beginVisualization = () => {
        setBeginButtonVisibility('none');
        setClearBoardVisibility('block');
        let startRowCol = getRowCol(firstClick);
        let endRowCol = getRowCol(secondClick);
        const solution = solve(startRowCol, endRowCol);
        return printRoute(solution);
    }
    
    const handleClick = (i) => {
        // Leave if clicked more than twice
        if (handleClickCounter === 2){
            return;
        } 
        setHandleClickCounter(handleClickCounter + 1);
        const copyOfBoard = [...board];

        if (firstClick || firstClick === 0) {
            document.getElementsByTagName('button')[i].id = 'second-click';
            setSecondClick(i);
            copyOfBoard[i] = i;
            setBoard(copyOfBoard);
            setBeginButtonVisibility('block');

        } else {
            document.getElementsByTagName('button')[i].id = 'first-click';
            setFirstClick(i);
            copyOfBoard[i] = i;
            setBoard(copyOfBoard);
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
            if (counter === i) {
                const col = 0;
                return [row, col];
            } else {
                const col = (i - counter);
                return [row, col];
            }
        }
    } 

    const getCellFromRowCol = (row, col) => {
        return (row * 50) + col;
    }

    const printRoute = (array) => {
        let cellArray = []
        for (let i of array) {
            let cell = getCellFromRowCol(i[0], i[1])
            cellArray.push(cell);
        }
        setSolvedRoute(cellArray);
    }

    return (
        <>
            <div className={'title'}>Pathfinding Visualizer</div>
            <div className={'instructions'}>
                <ol className={'instructions'}>
                    <li>Click on a starting square and then a click a
                    square to end on</li>
                    <li>Choose an algorithm</li>
                    <li>Click "Begin" to find a path between the two</li>
                </ol>
                <div className={'beginClearButtons'}>
                    <a href='#' onClick={beginVisualization}
                        style={{display: beginButtonVisibility}}>
                        Begin
                    </a>
                    <a href='#' onClick={clearBoard}
                        style={{display: clearBoardVisibility}}>
                        Clear Board
                    </a>
                </div>
            </div>
                
            <Board squares={board} onClick={handleClick} />
        </>
    )
}

export default Game;