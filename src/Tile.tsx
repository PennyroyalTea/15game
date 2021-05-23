import React from 'react';
import './Field.css';

interface Props {
    value: number | null,
    clickHandler(): void
}

const Tile = (props : Props) => {
    let cls = 'tile';
    if (props.value === 0) cls += ' empty';
    return (
        <div className={cls} onClick={props.clickHandler}>
            <span className='content'>{props.value}</span>
        </div>
    )
}

export default Tile;