import React from 'react';
import styles from './index.less';
import {LikeOutlined, ScanOutlined} from "@ant-design/icons";
import Back from "@/components/btn/Back";
import {Affix, Image} from "antd";
import {history} from "umi";
import backgroundImg from "@/assets/backgroundImg.jpeg";

interface IProps {
    title: string;
    subTitle: string;
    backUrl: string;
}


const TopIm: React.FC<IProps> = (props) => {
    const {title, subTitle,backUrl} = props;

    return (

        <div className={styles.backgroundImage} style={{
            height: '40vh', position: 'relative', backgroundImage: `url(${backUrl})`, backgroundSize: 'cover',marginBottom:'20px'
        }}>

            <h1 style={{
                color: 'white',
                textAlign: 'center',
                position: 'absolute',
                width: '100%',
                top: '40%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {title}
            </h1>
            <h3 style={{
                color: 'white',
                textAlign: 'center',
                position: 'absolute',
                width: '100%',
                top: '55%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {subTitle}
            </h3>
        </div>
    );
};

export default TopIm;
