import React from 'react';
import styles from './index.less';
import {Column} from "rc-table";
import {Col, Image, Row} from "antd";
import happySvg from '@/assets/happy.svg';
import tiredSvg from '@/assets/studying.svg';
import enrichSvg from '@/assets/success.svg';
import sadSvg from '@/assets/working.svg';
import EssayCard from "@/pages/Essay/component/EssayCard";
import {formatTime} from "@/utils/time";
import DateShow from "@/components/btn/DateShow";
import {DashboardOutlined, DashboardTwoTone} from "@ant-design/icons";


interface IProps {
    essay:CreatAPI.essayData;
    index:number;
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
    const {essay,index} = props;
    return (
        <Row style={{display: 'flex', alignItems: 'center', height: '100%',flexDirection:index%2===0?'row-reverse':'row'}} justify={"center"} className={styles.card}>
            <Col span={5}>
                <div className={styles.mood} style={{float: index%2===0?'left':'right'}}>
                    <Image src={getMood(essay.mood)} preview={false}/>
                </div>
            </Col>
            <Col lg={3} xl={2} xxl={2} className={styles.date}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <DashboardTwoTone  style={{fontSize:30}}/>
                <span>{formatTime(essay.createTime??'time out').date}</span>
            </Col>
            <Col span={15}>
                <div className={styles.content}>
                    <EssayCard content={essay.content} date={essay.createTime??'time out'} mood={essay.mood} urls={essay.urls}/>
                </div>
            </Col>
        </Row>
    );
};

export default MyCoEssay;
