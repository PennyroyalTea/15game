import React from 'react';
import {List} from 'immutable';

import Tile from './Tile';

interface Props {
    field: List<number>,
    handleTileClick(val: number): void
}

const Field = (props : Props) => {
    const tiles = props.field.map(x => <Tile value={x} clickHandler={() => props.handleTileClick(x)} key={x}/>)
    return (<div className='field'>
        {tiles}
    </div>);
}

export default Field;