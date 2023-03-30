import React from 'react';
import styles from './index.less';

interface IProps {
    text: string;
}

// 脚手架示例组件
const DidmondDance: React.FC<IProps> = (props) => {
    const { text } = props;
    return <div className={styles.loader}></div>;
};

export default DidmondDance;
