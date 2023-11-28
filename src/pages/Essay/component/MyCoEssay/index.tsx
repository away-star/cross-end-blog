import React from 'react';
import styles from './index.less';
import {Column} from "rc-table";
import {Image, Row} from "antd";
import happySvg from '@/assets/motion/happy.svg';
import tiredSvg from '@/assets/motion/studying.svg';
import enrichSvg from '@/assets/motion/success.svg';
import sadSvg from '@/assets/motion/working.svg';
import ImageLayout from "@/pages/Essay/component/ImageLayout";
import NineGrid from "@/pages/Essay/component/NineGrid";


interface IProps {
    content: string;
    urls: string[];
    mood: string;
}


const getMood = (mood: string) => {
    switch (mood) {
        case 'happy':
            return happySvg;
        case 'sad':
            return sadSvg;
        case 'tired':
            return tiredSvg;
        case 'enrich':
            return enrichSvg;
        default:
            return happySvg;
    }
}

// 脚手架示例组件
const MyCoEssay: React.FC<IProps> = (props) => {
    const {content, urls, mood} = props;
    return (
        <div className={styles.essay}>
            <div className={styles.container}>
                <div className={styles.saying}>
                    {content}
                </div>
                <div className={styles.ikon}><img src={getMood(mood)} alt={''} width={80} height={80}/></div>
            </div>
            {/*<div className={styles.img}>*/}
            {/*    <NineGrid images={urls}/>*/}
            {/*</div>*/}
            <div className={styles.img}>
            <Image src={urls[0]} width={300} height={300} style={{marginLeft:40,padding:10}}/>
            </div>
        </div>
    );
};

export default MyCoEssay;
