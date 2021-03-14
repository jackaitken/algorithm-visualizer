import React from 'react'

const style = {
    border: '1px solid rgb(99, 101, 104)',
    backgroundColor: 'rgb(188, 187, 186)',
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