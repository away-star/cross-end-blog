import React from 'react';
import styles from './index.less';


interface IProps {
    text: string;
    onClick?: () => void;
}


const BackHome: React.FC<IProps> = (props) => {
    const { text, onClick } = props;


    return (
        <button className={styles.btn} type="button" onClick={onClick}>
            <strong>{text}</strong>
            <div id="container-stars">
                <div id="stars"></div>
            </div>
            <div id="glow">
                <div className={`${styles.circle}`}></div>
                <div className={`${styles.circle}`}></div>
            </div>
        </button>
    );
};


export default BackHome;
