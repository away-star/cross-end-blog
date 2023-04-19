import React from 'react';
import styles from './index.less';

interface IProps {
    description: string;
    cover: string;
}

// 脚手架示例组件
const DescriptionCard: React.FC<IProps> = (props) => {
    const {description,cover} = props;
    return (
        <div className={styles.card}>
            <div className={styles.img} style={{  backgroundImage: `url(${cover})`}}></div>
            <div className={styles.textBox}>
                {/*<div className={styles.textContent}>*/}
                {/*    <p className={styles.h1}>Clans of Clash</p>*/}
                {/*    <span className={styles.span}>12 min ago</span>*/}
                {/*</div>*/}
                <p className={styles.p}>{description}</p>
                <div>
                </div>
            </div>
        </div>
    );
};

export default DescriptionCard;
