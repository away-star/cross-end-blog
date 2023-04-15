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


const TopIm: React.FC<IProps> = (props) => {
    const {title, subTitle} = props;

    return (
        <div className={styles.topOut}>
            <div className={styles.topIn}>
                <h2>{title}</h2>
                <h4>{subTitle}</h4>
            </div>
        </div>
    );
};

export default TopIm;
