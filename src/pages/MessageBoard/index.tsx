import React from 'react';
import {Layout} from 'antd';
import backgroundImg from '@/assets/backgroundImg.jpeg';
import styles from './index.less';
import Panel from "@/pages/MessageBoard/component/Panel";
import ChatGroup from "@/pages/MessageBoard/component/ChatGroup";
import Head from "@/components/Head";
import {useModel} from "@@/exports";

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

    const {getRandSlide} = useModel('initialModel', (model) => ({
        getRandSlide: model.getRandSlide
    }));


    return (

    <>
            <Head backUrl={getRandSlide()} subTitle={'岁月静好，留下一份温柔的留言吧~'} title={'留言区'}/>
            <Content style={{ width: '80%', margin: '0 auto', background: 'transparent' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '50%' }}><Panel  owner={"star"}/></div>
                    <div style={{ width: '50%' }}>
                        {/*<ChatGroup messages={messages} onSendMessage={(text)=>{console.log(text)}}/>*/}
                    </div>
                </div>
            </Content>
    </>
    );
}

export default MessageBoard;
