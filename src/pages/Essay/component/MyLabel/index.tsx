import React, {useEffect} from 'react';
import styles from './index.less';
import {formatTime} from "@/utils/time";

interface IProps {
    time?: string
}

// 脚手架示例组件
const MyLabel: React.FC<IProps> = (props) => {
    const {time=Date.now().toString()} = props;

    return (
        <div className={styles.left}>
            <span style={{marginRight:10}}>{formatTime(time).date}</span><span>{formatTime(time).time}</span><br/>
            <span>{formatTime(time).day}</span>
        </div>
    );
};

export default MyLabel;
