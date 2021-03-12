import React from 'react'

const style = {
    border: '1px solid black',
    backgroundColor: 'lightgray',
    fontSize: '1px',
    color: 'rgba(0, 0, 0, 0)',
    cursor: 'pointer',
    outline: 'none',
}


const Square = ({ value, onClick }) => (
    <button id={'square'} style={style} onClick={onClick}>
        {value}
    </button>
)


export default Square