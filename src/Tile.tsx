import React from 'react';
import './Field.css';

interface Props {
    value: number | null
}

const Tile = (props : Props) => {
    return (
        <div className='tile'>
            {props.value}
        </div>
    )
}

export default Tile;