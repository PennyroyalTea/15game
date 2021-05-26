import React from "react";

import { Menu, Layout} from 'antd';

import Game from "./Game";
import Leaderboard from "./Leaderboard";
import UserForm from "./UserForm";

const {Header, Content} = Layout;

interface Props {}
interface State {
    window: 'game' | 'leaderboard',
    user: string | undefined
}

export default class Main extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);
        this.state = {
            window: 'game',
            user: undefined
        }
        this.handleMenuClick = this.handleMenuClick.bind(this)
    }

    handleMenuClick(e : any) {
        this.setState({
            window: e.key
        })
    }

    render() {
        const content = (this.state.window === 'game' ? <Game user={this.state.user || 'undefined'}/> : <Leaderboard/>);


        return (
            <>
                <Layout>
                    <Header>
                        <Menu
                            style={{fontSize: '18px'}}
                            theme='dark'
                            mode='horizontal'
                            onClick={this.handleMenuClick}
                            defaultSelectedKeys={['game']}
                        >
                            <Menu.Item key='game'>
                                Игра
                            </Menu.Item>
                            <Menu.Item key='leaderboard'>
                                Рейтинг
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        {content}
                    </Content>
                </Layout>
                <UserForm
                    visible={this.state.user === undefined}
                    submitName={(name: string) => this.setState({user: name})}
                />
            </>


            );
    }
}
