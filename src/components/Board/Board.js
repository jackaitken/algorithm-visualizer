import React from 'react'
import Square from '../Square/Square'

const style = {
    borderRadius: '2px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',

}

const Board = ({ squares, onClick }) => (
    <div style={style}>
        <Square value='1' onClick={() => onClick('value value')} />
        <Square value='2' onClick={() => onClick('value value')} />
        <Square value='3' onClick={() => onClick('value value')} />
        <Square value='4' onClick={() => onClick('value value')} />
        <Square value='5' onClick={() => onClick('value value')} />
        <Square value='6' onClick={() => onClick('value value')} />
        <Square value='7' onClick={() => onClick('value value')} />
        <Square value='8' onClick={() => onClick('value value')} />
        <Square value='9' onClick={() => onClick('value value')} />
    </div>
)

export default Board
