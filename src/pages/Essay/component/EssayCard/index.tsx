import React from 'react';
import styles from './index.less';
import ImageLayout from "@/pages/Essay/component/ImageLayout";
import {formatTime} from "@/utils/time";

interface Iprop {
    content: string;
    urls: string[];
    mood: string;
    date:string
}


const EssayCard: React.FC<Iprop> = (props) => {
    const {content, urls, mood,date} = props;
    return (
        <>
            <div className={styles.task} draggable="true">
                <div className={styles.tags}>
                    <span className={styles.tag}>{formatTime(date).day}</span>
                    <button className={styles.options} type={'button'}>
                        <svg xmlSpace="preserve" viewBox="0 0 41.915 41.916" xmlnsXlink="http://www.w3.org/1999/xlink"
                             xmlns="http://www.w3.org/2000/svg" id="Capa_1" version="1.1" fill="#000000">
                            <g strokeWidth="0" id={styles.SVGRepo_bgCarrier}></g>
                            <g strokeLinejoin="round" strokeLinecap="round"
                               id={styles.SVGRepo_tracerCarrier}></g>
                            <g id={styles.SVGRepo_iconCarrier}>
                                <g>
                                    <g>
                                        <path
                                            d="M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585 C8.705,15.371,11.214,17.874,11.214,20.956z"></path>
                                        <path
                                            d="M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585 C24.056,15.371,26.564,17.874,26.564,20.956z"></path>
                                        <path
                                            d="M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585 C39.406,15.371,41.915,17.874,41.915,20.956z"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <p>{content}</p>
                <ImageLayout images={urls}/>
            </div>

        </>
    )
}

export default EssayCard;
