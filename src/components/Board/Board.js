import React from 'react'
import Square from '../Square/Square'

const style = {
    borderRadius: '2px',
    width: '1025px',
    height: '800px',
    margin: '0 auto',
    paddingTop: '25px',
    paddingBottom: '20px',
    display: 'grid',
    gridTemplate: 'repeat(50, 1fr) / repeat(50, 1fr)',

}

const Board = ({ squares, onClick }) => (
    <div style={style}>
        {squares.map((square, i) => (
            <Square id={i} key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Board
