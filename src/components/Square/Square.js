import React from 'react'
import './Square.css'

const Square = () => {

    const handleClick = () => {
        alert('click')
    }

    let content = [];
    for (let i = 0; i < 10; i++) {
        content.push(<button className={'square'} onClick={handleClick} key={i}></button>)
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Square