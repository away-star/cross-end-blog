import React from 'react';
import styles from './index.less';

interface IProps {
    text: string;
}

const ThreeD: React.FC<IProps> = (props) => {
    const { text } = props;
    return (
        <button className={styles.btn} type={"button"}>{text}</button>
    );
};

export default ThreeD;
