import React from 'react';
import styles from './index.less';
import { LikeOutlined, ScanOutlined } from "@ant-design/icons";
import Back from "@/components/btn/Back";
import { Affix, Image } from "antd";
import { history } from "umi";
import backgroundImg from "@/assets/backgroundImg.jpeg";

interface IProps {
    title: string;
    subTitle: string;
    backUrl: string;
}

const TopIm: React.FC<IProps> = (props) => {
    const { title, subTitle, backUrl } = props;

    return (
        <div className={styles.backgroundImage} style={{backgroundImage:`url(${backUrl})`}}>
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.subTitle}>{subTitle}</h3>
        </div>
    );
};

export default TopIm;
