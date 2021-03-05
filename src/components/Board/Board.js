import React from 'react'
import Square from '../Square/Square'

const style = {
    borderRadius: '2px',
    width: '800px',
    height: '750px',
    margin: '0 auto',
    display: 'grid',
    paddingTop: '75px',
    gridTemplate: 'repeat(50, 1fr) / repeat(50, 1fr)',

}

const Board = ({ squares, onClick }) => (
    <div style={style}>
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(console.log(i))} />
        ))}
    </div>
)

export default Board
