import React from 'react';
import {Col, Layout, Row} from 'antd';
import ChatWindow from "@/pages/MessageBoard/component/ChatWindow";
import Head from "@/components/Head";
import {useModel} from "@@/exports";
import CommentArea from "@/pages/MessageBoard/component/CommentArea";
import CommentCard from "@/pages/MessageBoard/component/CommentCard";
import styles from './index.less';

const {Header, Content} = Layout;


function MessageBoard() {

    const {getRandSlide} = useModel('initialModel', (model) => ({
        getRandSlide: model.getRandSlide
    }));


    return (

        <>
            <Head backUrl={getRandSlide()} subTitle={'岁月静好，留下一份温柔的留言吧~'} title={'留言区'}/>
            {/*<Content style={{ width: '80%', margin: '0 auto', background: 'transparent' }}>*/}
            {/*    <div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
            {/*        <div style={{ width: '50%' }}><ChatWindow/></div>*/}
            {/*        <div style={{ width: '50%' }}>*/}
            {/*            /!*<ChatWindow messages={messages} onSendMessage={(text)=>{console.log(text)}}/>*!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Content>*/}
            {/*<CommentArea/>*/}
            {/*<div className={styles.cards}>*/}
            {/*<CommentCard avatar={'https://staraway.love/blog/authorAvatar.jpg'} comment={'很高兴以这种方式认识你'} date={'2023-3-21'} name={'小星'}></CommentCard>*/}
            {/*</div>*/}
            <div className={styles.cards}>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} justify={'start'}>
                    <Col className={styles.card} lg={6} md={8}>
                        <CommentCard avatar={'https://staraway.love/blog/authorAvatar.jpg'}
                                     comment={'很高兴以这种方式认识你'} date={'2023-3-21'} name={'小星'}/>
                    </Col>
                    <Col className={styles.card} lg={6} md={8}>
                        <CommentCard avatar={'https://staraway.love/blog/authorAvatar.jpg'}
                                     comment={'很高兴以这种方式认识你'} date={'2023-3-21'} name={'小星'}/>
                    </Col>
                    <Col className={styles.card} lg={6} md={8}>
                        <CommentCard avatar={'https://staraway.love/blog/authorAvatar.jpg'}
                                     comment={'很高兴以这种方式认识你'} date={'2023-3-21'} name={'小星'}/>
                    </Col>
                    <Col className={styles.card} lg={6} md={8}>
                        <CommentCard avatar={'https://staraway.love/blog/authorAvatar.jpg'}
                                     comment={'很高兴以这种方式认识你'} date={'2023-3-21'} name={'小星'}/>
                    </Col>
                    <Col className={styles.card} lg={6} md={8}>
                        <CommentCard avatar={'https://staraway.love/blog/authorAvatar.jpg'}
                                     comment={'很高兴以这种方式认识你'} date={'2023-3-21'} name={'小星'}/>
                    </Col>
                    <Col className={styles.card} lg={6} md={8}>
                        <CommentCard avatar={'https://staraway.love/blog/authorAvatar.jpg'}
                                     comment={'很高兴以这种方式认识你'} date={'2023-3-21'} name={'小星'}/>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default MessageBoard;
