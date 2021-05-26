import React from 'react';

import {Table} from 'antd';

interface Props {}
interface State {
    data: Entry[]
}

interface Entry {
    name: string,
    steps: number
}

const columns = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Количество кликов',
        dataIndex: 'steps',
        key: 'steps',
        sorter: (a : Entry, b : Entry) => a.steps - b.steps
    }
];


export default class Leaderboard extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        const dataString = window.localStorage.getItem('leaderboard') || '[]'
        this.setState({
            data: JSON.parse(dataString)
        })
    }

    render() {
        return (<Table
            dataSource={this.state.data}
            columns={columns}
        />);
    }
}
