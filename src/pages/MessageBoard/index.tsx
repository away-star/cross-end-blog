import React, {useEffect, useState} from 'react';
import {Col, Layout, List, message, Row, Tooltip} from 'antd';
import ChatWindow from "@/pages/MessageBoard/component/ChatWindow";
import Head from "@/components/Head";
import {history, useModel} from "@@/exports";
import CommentArea from "@/pages/MessageBoard/component/CommentArea";
import CommentCard from "@/pages/MessageBoard/component/CommentCard";
import styles from './index.less';
import SpaceBtn from "@/components/btn/SpaceBtn";
import CommentWrite from "@/pages/MessageBoard/component/commentWrite";
import {getAllUsers, getMessagePage} from "@/services/api";
import PostCard from "@/components/PostCard";
import {DEFAULT_AVATAR} from "@/constants";
import {getTimeAgo} from "@/utils/time";

const {Header, Content} = Layout;


function MessageBoard() {

    const {getRandSlide} = useModel('initialModel', (model) => ({
        getRandSlide: model.getRandSlide
    }));

    const [messages, setMessages] = useState<InteractAPI.messageData[]>([]);
   // const [loading, setLoading] = useState(true); // 加载状态变量


    const fetchData = async () => {
        const pathParts = history.location.pathname.trim().split('/');
        const idUrl = pathParts[pathParts.length - 2];

        const res = await getMessagePage({step: 20, loginInformationId: idUrl});
        if (res.code !== 200) {
            message.error(res.msg);
        } else {
            console.log(res.data);
            const messages: InteractAPI.messageData[] = res.data.records.map((item:any) => ({
                createTime: item.createTime,
                updateTime: item.updateTime,
                content: item.content,
                deliverAvatar: item.avatar,
                deliverName: item.nickname,
                id: item.id,
                open: item.open,
                deliverId: item.authorId,
                hostId:item.hostId
            }));
            setMessages(messages)
        }
    }

    useEffect(() => {
        console.log('useEffect')
        fetchData();
        // window.addEventListener("scroll", onScrollEvent)
    }, []);


    return (

        <>
            <Head backUrl={getRandSlide()} subTitle={'岁月静好，留下一份温柔的留言吧~'} title={'留言区'}/>
            <Row justify={"center"} style={{marginTop: 40, marginBottom: 20}}>
                <CommentWrite/>
            </Row>

            <div className={styles.cards}>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} justify={'start'}>
                    {messages.map((item, index) => (
                        <Col className={styles.card} lg={6} md={8} key={index}>
                            <CommentCard avatar={item.deliverAvatar??DEFAULT_AVATAR}
                                         comment={item.content}
                                         date={getTimeAgo(item.createTime??'')} name={item.deliverName??''}/>
                        </Col>
                    ))}

                    {/*    <Col className={styles.card} lg={6} md={8}>*/}
                    {/*        <CommentCard avatar={'https://staraway.love/blog/authorAvatar.jpg'}*/}
                    {/*                     comment={'很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你'}*/}
                    {/*                     date={'2023-3-21'} name={'小星'}/>*/}
                    {/*    </Col><Col className={styles.card} lg={6} md={8}>*/}
                    {/*    <CommentCard avatar={'https://staraway.love/blog/authorAvatar.jpg'}*/}
                    {/*                 comment={'很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你'}*/}
                    {/*                 date={'2023-3-21'} name={'小星'}/>*/}
                    {/*</Col><Col className={styles.card} lg={6} md={8}>*/}
                    {/*    <CommentCard avatar={'https://staraway.love/blog/authorAvatar.jpg'}*/}
                    {/*                 comment={'很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你'}*/}
                    {/*                 date={'2023-3-21'} name={'小星'}/>*/}
                    {/*</Col><Col className={styles.card} lg={6} md={8}>*/}
                    {/*    <CommentCard avatar={'https://staraway.love/blog/authorAvatar.jpg'}*/}
                    {/*                 comment={'很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你很高兴以这种方式认识你'}*/}
                    {/*                 date={'2023-3-21'} name={'小星'}/>*/}
                    {/*</Col>*/}

                </Row>
            </div>
        </>
    );
}

export default MessageBoard;
