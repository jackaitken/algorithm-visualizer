import React from 'react'
import Square from '../Square/Square'

const style = {
    paddingTop: '150px',
    borderRadius: '2px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',

}

const Board = ({ squares, onClick }) => (
    <div style={style}>
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick()} />
        ))}
    </div>
)

export default Board
