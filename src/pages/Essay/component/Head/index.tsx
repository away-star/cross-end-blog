import React from 'react';
import styles from './index.less';
import {LikeOutlined, ScanOutlined} from "@ant-design/icons";
import Back from "@/components/btn/Back";
import {Affix} from "antd";
import {history} from "umi";

interface IProps {
    title: string;
    subTitle: string;
}

// 脚手架示例组件
const TopIm: React.FC<IProps> = (props) => {
    const {title, subTitle} = props;

    return (
        <div className={styles.topOut}>
            <div className={styles.topIn}>
                <h3>{title}</h3>
                <h5>{subTitle}</h5>
            </div>
        </div>
    );
};

export default TopIm;
