import React from 'react';

import 'antd/dist/antd.css';
import { Space,  Row, Col, Typography, Button, message } from 'antd';

import {permutateToWinnable} from './Util';

import {List} from 'immutable';
import Field from './Field';

const {Title} = Typography;

interface Coord {
    x: number,
    y: number
}

const getxy = (ind : number) : Coord => {
    const x = ind % 4;
    const y = (ind - x) / 4;
    return {x: x, y: y};
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

const wordform = ['кликов', 'клик', 'клика', 'клика', 'клика', 'кликов', 'кликов', 'кликов', 'кликов', 'кликов'];

interface Props {}
interface State {
    field: List<number>,
    clicksCnt: number
}

class Game extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);
        this.state = {
            field: List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15]),
            clicksCnt: 0
        }

        this.handleTileClick = this.handleTileClick.bind(this)
        this.handleRestart = this.handleRestart.bind(this)
    }

    handleWin() {
        message.success(`Вы справились за ${this.state.clicksCnt} ${wordform[this.state.clicksCnt % 10]}!`);

        let oldLB = JSON.parse(window.localStorage.getItem('leaderboard') || '[]')
        oldLB.push({name: 'bo', steps: this.state.clicksCnt})
        window.localStorage.setItem('leaderboard', JSON.stringify(oldLB));

        this.handleRestart();
    }

    handleTileClick (val: number) {
        if (val === 0) return;
        const curTileCoord = getxy(this.state.field.indexOf(val));
        const emptyTileCoord = getxy(this.state.field.indexOf(0));
        if (adjacent(curTileCoord, emptyTileCoord)) {
            const nextField = swap(this.state.field, this.state.field.indexOf(val), this.state.field.indexOf(0))
            this.setState({
                field: swap(this.state.field, this.state.field.indexOf(val), this.state.field.indexOf(0)),
                clicksCnt: this.state.clicksCnt + 1
            }, () => {
                if (isWin(nextField)) {
                    this.handleWin()
                }
            })

        }
    }

    handleRestart () {
        this.setState({
            field: permutateToWinnable(this.state.field),
            clicksCnt: 0
        })
    }

    render() {
        return (<Space direction='vertical'>
            <Row>
                <Col span={8}>
                    <Title level={4}>Кликов сделано: {this.state.clicksCnt} </Title>
                </Col>
                <Col span={8}/>
                <Col span={8}>
                    <Button size='large' onClick={this.handleRestart}>Перемешать</Button>
                </Col>
            </Row>
            <Field
                field = {this.state.field}
                handleTileClick = {this.handleTileClick}
            />
        </Space>)
    }
}

export default Game;