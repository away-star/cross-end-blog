import React, {useState} from 'react';
import {Col, Image, List, Row} from 'antd';
import styles from './index.less'

import postUrl from '@/assets/yay.jpg'
import {formatTime} from "@/utils/time";
import MyMarkdown from "@/components/MyMarkdown";
import {history} from "umi";

interface Iprop {
    post: API.Post
}

const PostCard: React.FC<Iprop> = (props) => {
    const {post} = props

    return (
        <div className={styles.post} onClick={() => {
            history.push('/blog/details/' + post.id, {post: post})
        }
        }>
            <div className={styles.alignLeft}>
                <span className={styles.red}></span>
                <span className={styles.yellow}></span>
                <span className={styles.green}></span>
            </div>
            <div className={styles.alignRight}>
                {formatTime(post.createTime ?? '2023-3-9').date + ' ' + formatTime(post.createTime ?? '2023-3-9').time}
            </div>
            <h1>{post.title}</h1>
            <Row justify={"space-around"}>
                <Col span={8}>
                    <Image src={post.coverUrl} width={'100%'}/>
                </Col>
                <Col span={15}>
                    <MyMarkdown text={post.content}/>
                </Col>
            </Row>
        </div>
    )
}
export default PostCard;
