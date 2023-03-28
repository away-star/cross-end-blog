import React from 'react';
import styles from './index.less';

interface IProps {
    text: string;
}

// 脚手架示例组件
const Servo: React.FC<IProps> = (props) => {
    const { text } = props;
    return (
        <div className={styles.loader}>
            <span className={styles.l}>L</span>
            <span className={styles.o}>o</span>
            <span className={styles.a}>a</span>
            <span className={styles.d}>d</span>
            <span className={styles.i}>i</span>
            <span className={styles.n}>n</span>
            <span className={styles.g}>g</span>
            <span className={styles.d1}>.</span>
            <span className={styles.d2}>.</span>
        </div>
    );
};

export default Servo;
