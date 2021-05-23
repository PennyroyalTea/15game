import React from 'react';
import Tile from './Tile';

interface Props {}

const Field = (props : Props) => {
    const field = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15];

    const tiles = field.map(x => <Tile value={x} key={x}/>)

    return (<div className='field'>
        {tiles}
    </div>);
}

export default Field;