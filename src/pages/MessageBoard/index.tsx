import React from 'react';
import {Layout} from 'antd';
import backgroundImg from '@/assets/backgroundImg.jpeg';
import styles from './index.less';
import Panel from "@/pages/MessageBoard/component/Panel";
import ChatGroup from "@/pages/MessageBoard/component/ChatGroup";

const {Header, Content} = Layout;

const messages = [
    {
        id: '1',
        user: {
            id: '1',
            name: '张三',
            avatarUrl: 'https://picsum.photos/id/1011/100/100',
        },
        text: '大家好，我是张三！',
        createdAt: Date.now() - 10000,
    }, {
        id: '1',
        user: {
            id: '1',
            name: '张三',
            avatarUrl: 'https://picsum.photos/id/1011/100/100',
        },
        text: '大家好，我是张三！',
        createdAt: Date.now() - 10000,
    }, {
        id: '1',
        user: {
            id: '1',
            name: '张三',
            avatarUrl: 'https://picsum.photos/id/1011/100/100',
        },
        text: '大家好，我是张三！',
        createdAt: Date.now() - 10000,
    },
    {
        id: '2',
        user: {
            id: '2',
            name: '李四',
            avatarUrl: 'https://picsum.photos/id/1012/100/100',
        },
        text: '欢迎加入本群聊！',
        createdAt: Date.now() - 5000,
    },
    {
        id: '3',
        user: {
            id: '1',
            name: '张三',
            avatarUrl: 'https://picsum.photos/id/1011/100/100',
        },
        text: '这个页面组件好用吗？',
        createdAt: Date.now() - 2000,
    },
    {
        id: '4',
        user: {
            id: '2',
            name: '李四',
            avatarUrl: 'https://picsum.photos/id/1012/100/100',
        },
        text: '非常好用，赞一个！',
        createdAt: Date.now(),
    },
];

const currentUser = {
    id: '1',
    name: '张三',
    avatarUrl: 'https://picsum.photos/id/1011/100/100',
};


function MessageBoard() {
    return (
        <Layout style={{background: 'transparent'}}>
            <div style={{
                height: '30vh', position: 'relative', backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover',marginBottom:'20px'
            }}>

                <h1 style={{
                    color: 'white',
                    textAlign: 'center',
                    position: 'absolute',
                    width: '100%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div>留言板</div>
                </h1>
            </div>
            <Content style={{ width: '80%', margin: '0 auto', background: 'transparent' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '50%' }}><Panel  owner={"star"}/></div>
                    <div style={{ width: '50%' }}><ChatGroup currentUser={currentUser} messages={messages} onSendMessage={(text)=>{console.log(text)}}/></div>
                </div>
            </Content>
        </Layout>
    );
}

export default MessageBoard;
