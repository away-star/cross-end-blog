import React, {useState} from 'react';
import {Col, Image, List, Row} from 'antd';
import styles from './index.less'

import postUrl from '@/assets/yay.jpg'


const PostCard: React.FC = () => {

    return (
        <div className={styles.post}>
            <div className={styles.alignLeft}>
                <span className={styles.red}></span>
                <span className={styles.yellow}></span>
                <span className={styles.green}></span>
            </div>
            <div className={styles.alignRight}>
                {2021223}
            </div>
            <h3>springCloud----nacos使用详解</h3>
            <div className={styles.content}>
                <Image src={postUrl} className={styles.img}/>

                <div>Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务,</div>
            </div>
        </div>
    )
}
export default PostCard;
