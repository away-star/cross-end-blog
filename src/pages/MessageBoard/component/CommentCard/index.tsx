import React from 'react';
import styles from './index.less';

interface IProp{
    comment: string
    date: string
    avatar: string
    name: string

}

function getRandomPastelColor() {
    const r = Math.round((Math.random() * 100) + 155);
    const g = Math.round((Math.random() * 100) + 155);
    const b = Math.round((Math.random() * 100) + 155);
    return `rgb(${r}, ${g}, ${b})`;
}

const CommentCard: React.FC<IProp>=(props)=> {
    const {comment, date, avatar, name} = props;

    return (
        <>
            <div className={styles.card} style={{backgroundColor:`${getRandomPastelColor()}`}}>
                {/*<div className={styles.avatar} style={{  backgroundImage: `url(${avatar})`}}></div>*/}
                <div className={styles.img} style={{  backgroundImage: `url(${avatar})`}}></div>
                <div className={styles.textBox}>
                    <div className={styles.textContent}>
                        <p className={styles.h1}>{name}</p>
                        <span className={styles.span}>{date}</span>
                    </div>
                    <p className={styles.p}>{comment}</p>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default CommentCard;
