import React, { useState, useEffect } from 'react';
import { solve } from '../../dfsandbfs';
import { getCellFromRowCol, getRowCol, convertExploredObject } 
    from '../../helpers';
import Board from '../Board/Board';
import './Game.css'

const Game = () => {

    const [board, setBoard] = useState(Array(2500).fill(null));
    const [firstClick, setFirstClick] = useState(null);
    const [secondClick, setSecondClick] = useState(null);
    const [solvedRoute, setSolvedRoute] = useState(0);
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
            if (solvedRoute !== 'orange') {
                solvedRoute.forEach(cell => {
                    solvedCells.push(document.getElementsByTagName('button')[cell]);
                    copyOfBoard[cell] = cell;
                    setBoard(copyOfBoard);
                });
                
                solvedCells.forEach(function(cell, index) {
                    setTimeout(function() {
                        setSolvedRoute(cell.style.backgroundColor = 'orange');
                    }, 20 * (index + 1));
                })
            }
            setClearBoardVisibility('block');

            // Reset all squares after clear board
        } else if (solvedRoute === null) {
            board.forEach(cell => {
                if (cell !== null) {
                    document.getElementsByTagName('button')[cell].style.backgroundColor = 'rgb(188, 187, 186)';
                    document.getElementsByTagName('button')[cell].id = 'square';
                }
            })
            setBoard(Array(2500).fill(null));
            setHandleClickCounter(0);
            setClearBoardVisibility('none');
        }
    }, [solvedRoute]);

    let handleClick = (i) => {
        // Exit if clicked more than twice
        if (handleClickCounter === 2){
            return;
        } 
        setHandleClickCounter(handleClickCounter + 1);
        let copyOfBoard = [...board];

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

    let beginVisualization = event => {
        event.preventDefault();
        setBeginButtonVisibility('none');

        // getRowCol located in src/helpers
        let startRowCol = getRowCol(firstClick);
        let endRowCol = getRowCol(secondClick);
        const [solution, explored] = solve(startRowCol, endRowCol);
        convertExploredObject(explored);
        return printRoute(solution);    
    }

    let printRoute = array => {
        let cellArray = []
        for (let i of array) {
            let cell = getCellFromRowCol(i[0], i[1]) // getCellFromRowCol located in src/helpers
            cellArray.push(cell);
        }
        setSolvedRoute(cellArray);
    }

    let clearBoard = event => {
        event.preventDefault();
        
        // Reset all state
        setFirstClick(null);
        setSecondClick(null);
        setSolvedRoute(null);
    }

    return (
        <>
            <div className={'title'}>Pathfinding Visualizer</div>
            <div className={'flex-container'}>
                <dl className={'flex-child'}>
                    <dd><strong>To begin</strong></dd>
                    <dd>Choose a start node and an end node</dd>
                    <dd>Choose an algorithm</dd>
                    <dd>Click "Begin" to find a path between the two</dd>
                </dl>
                <dl className={'flex-child'}>
                    <input type={'radio'} id={'StackFrontier'} name={'algo'} checked></input>
                    <label for='dfs'>Depth First Search</label>
                    <br></br>
                    <input type={'radio'} id={'QueueFrontier'} name={'algo'}></input>
                    <label for='dfs'>Breadth First Search</label>
                </dl>
                <dl className={'flex-child'}>
                    <dd><strong>Adjust speed</strong></dd>
                    <input type={'radio'} id={'Slowest'} name={'speed'}></input>
                        <label for='dfs'>Slowest</label>
                    <input type={'radio'} id={'Slow'} name={'speed'}></input>
                        <label for='dfs'>Slow</label>
                    <br></br>
                    <input type={'radio'} id={'Faster'} name={'speed'} checked></input>
                        <label for='dfs'>Faster</label>
                    <input type={'radio'} id={'Even Faster'} name={'speed'}></input>
                        <label for='dfs'>Even Faster</label>
                    <br></br>
                    <input type={'radio'} id={'Actual Speed'} name={'speed'}></input>
                        <label for='dfs'>Actual Speed</label>
                </dl>
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