import React from 'react';
import styles from './index.less';

interface IProps {
    text: string;
}

// 脚手架示例组件
const SelectCard: React.FC<IProps> = (props) => {
    const { text } = props;
    return (
        <div className={styles.cards}>
            <div className={`${styles.card} ${styles.one}`}>
                <div className={styles.cardDetails}>
                    <div className={styles.cardDetailsHaeder}>Card Header</div>
                    <div className={styles.cardDetailsButton}>Click me</div>
                </div>
            </div>
            <div className={`${styles.card} ${styles.two}`}>
                <div className={styles.cardDetails}>
                    <div className={styles.cardDetailsHaeder}>Card Header</div>
                    <div className={styles.cardDetailsButton}>Click me</div>
                </div>
            </div>
            <div className={`${styles.card} ${styles.three}`}>
                <div className={styles.cardDetails}>
                    <div className={styles.cardDetailsHaeder}>Card Header</div>
                    <div className={styles.cardDetailsButton}>Click me</div>
                </div>
            </div>
        </div>
    );
};

export default SelectCard;
