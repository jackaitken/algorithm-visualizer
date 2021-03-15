import React from 'react'
import './Square.css'

const Square = ({ value, onClick }) => (
    <button id={'square'} className={'squareStyle'} onClick={onClick}>
    {value}
    </button>
)

export default Square