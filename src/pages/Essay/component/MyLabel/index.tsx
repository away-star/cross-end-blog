import React from 'react';
import styles from './index.less';
import {Column} from "rc-table";

interface IProps {
    time?: Date
}

// 脚手架示例组件
const MyLabel: React.FC<IProps> = (props) => {
    const {time} = props;
    return (
        <div className={styles.left}>
            <span style={{marginRight:10}}>23.1.17 </span><span>18:21</span><br/>
            <span>Friday</span>
        </div>
    );
};

export default MyLabel;
