import React from 'react';

import 'antd/dist/antd.css';
import { Row, Col, Typography, Button, message } from 'antd';


import {List} from 'immutable';
import Field from './Field';
import {useState} from "react";

const {Title} = Typography;

interface Coord {
    x: number,
    y: number
}

const getxy = (ind : number) : Coord => {
    const x = ind % 4;
    const y = (ind - x) / 4;
    return {'x': x, 'y': y};
}

const adjacent = (a: Coord, b: Coord) : boolean => {
    return (
        (a.x === b.x && Math.abs(a.y - b.y) === 1)
        || (a.y === b.y && Math.abs(a.x - b.x) === 1)
    );
}

const swap = (list : List<number>, pos1 : number, pos2: number) : List<number> => {
    const tmp = list.get(pos1);
    return list.set(pos1, list.get(pos2) as number).set(pos2, tmp as number);
}

const isWin = (list: List<number>) : boolean => {
    return list.every((val, id) => val === (id + 1) % 16);
}
const Page = () => {
    const [field, setField] = useState(List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15]));
    const [clicksCnt, setClicksCnt] = useState(0);

    const handleTileClick = (val: number) => {
        if (val === 0) return;
        const curTileCoord = getxy(field.indexOf(val));
        const emptyTileCoord = getxy(field.indexOf(0));
        if (adjacent(curTileCoord, emptyTileCoord)) {
            setField(swap(field, field.indexOf(val), field.indexOf(0)));
            setClicksCnt(clicksCnt + 1);
        }
    }

    const handleRestart = () => {
        setField(field.sortBy(Math.random));
        setClicksCnt(0);
    }

    if (isWin(field)) {
        message.success(`Вы справились за ${clicksCnt} кликов!`);
        handleRestart();
    }

    return (<>
        <Row>
            <Col span={4}>
                <Title level={4}>Кликов сделано: {clicksCnt} </Title>
            </Col>
            <Col span={4}>
                <Button onClick={handleRestart}>Начать сначала</Button>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Field
                    field = {field}
                    handleTileClick = {handleTileClick}
                />
            </Col>
        </Row>
    </>)
}
export default Page;