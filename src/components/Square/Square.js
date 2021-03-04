import React from 'react'

const style = {
    background: 'lightgray',
    border: '2px solid black',
    fontSize: '20px',
    fontWeight: '400',
    cursor: 'pointer',
    outline: 'none',
    fontFamily: 'sans-serif'
}

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
)


export default Square