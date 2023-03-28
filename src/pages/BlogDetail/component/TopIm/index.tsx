import React from 'react';
import styles from './index.less';
import {LikeOutlined, ScanOutlined} from "@ant-design/icons";
import Back from "@/components/btn/Back";
import {Affix} from "antd";
import {history} from "umi";

interface IProps {
    like: number;
    title: string;
    view: number;
}

// 脚手架示例组件
const TopIm: React.FC<IProps> = (props) => {
    const {like, title, view} = props;
    return (
        <div className={styles.topOut}>
            <div className={styles.back}>
                <Affix offsetTop={20}>
                <Back text={'返回'} onClick={history.back}/>
                </Affix>
            </div>
            <div className={styles.topIn}>
                <p>{title}</p>
                <span><LikeOutlined style={{marginRight: 0}}/>{like}</span>
                <span><ScanOutlined style={{marginRight: 0}}/>{view}</span>
            </div>
        </div>
    );
};

export default TopIm;
