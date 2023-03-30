import React from 'react';
import styles from './index.less';

interface IProps {
    text: string;
}

const GoTo: React.FC<IProps> = (props) => {
    const { text } = props;
    return (
        <button className={styles.btn} type="button">
            <div className={styles.wrapper}>
                <p className={styles.text}>{text}</p>
                <div className={`${styles.flower} ${styles.flower1}`}>
                    <div className={`${styles.petal} ${styles.one}`} />
                    <div className={`${styles.petal} ${styles.two}`} />
                    <div className={`${styles.petal} ${styles.three}`} />
                    <div className={`${styles.petal} ${styles.four}`} />
                </div>
                <div className={`${styles.flower} ${styles.flower2}`}>
                    <div className={`${styles.petal} ${styles.one}`} />
                    <div className={`${styles.petal} ${styles.two}`} />
                    <div className={`${styles.petal} ${styles.three}`} />
                    <div className={`${styles.petal} ${styles.four}`} />
                </div>
                <div className={`${styles.flower} ${styles.flower3}`}>
                    <div className={`${styles.petal} ${styles.one}`} />
                    <div className={`${styles.petal} ${styles.two}`} />
                    <div className={`${styles.petal} ${styles.three}`} />
                    <div className={`${styles.petal} ${styles.four}`} />
                </div>
                <div className={`${styles.flower} ${styles.flower4}`}>
                    <div className={`${styles.petal} ${styles.one}`} />
                    <div className={`${styles.petal} ${styles.two}`} />
                    <div className={`${styles.petal} ${styles.three}`} />
                    <div className={`${styles.petal} ${styles.four}`} />
                </div>
                <div className={`${styles.flower} ${styles.flower5}`}>
                    <div className={`${styles.petal} ${styles.one}`} />
                    <div className={`${styles.petal} ${styles.two}`} />
                    <div className={`${styles.petal} ${styles.three}`} />
                    <div className={`${styles.petal} ${styles.four}`} />
                </div>
                <div className={`${styles.flower} ${styles.flower6}`}>
                    <div className={`${styles.petal} ${styles.one}`} />
                    <div className={`${styles.petal} ${styles.two}`} />
                    <div className={`${styles.petal} ${styles.three}`} />
                    <div className={`${styles.petal} ${styles.four}`} />
                </div>
            </div>
        </button>
    );
};

export default GoTo;
