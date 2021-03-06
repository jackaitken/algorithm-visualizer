import React from 'react'

const style = {
    background: 'lightgray',
    border: '1px solid black',
    fontSize: '10px',
    cursor: 'pointer',
    outline: 'none',
}

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
)


export default Square