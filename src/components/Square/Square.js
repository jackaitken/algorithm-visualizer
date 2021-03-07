import React from 'react'

const style = {
    border: '1px solid black',
    backgroundColor: 'lightgray',
    fontSize: '10px',
    cursor: 'pointer',
    outline: 'none',
}


const Square = ({ value, onClick }) => (
    <button id={'square'} style={style} onClick={onClick}>
        {value}
    </button>
)


export default Square