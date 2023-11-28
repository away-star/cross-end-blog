import styles from './author.less'
import React from "react";
import {history} from "umi";
import {getIdFromUrl} from "@/utils/urlUtil";
import {
    DEFAULT_AVATAR, DEFAULT_CSDN_ADDR,
    DEFAULT_GITHUB_ADDR,
    DEFAULT_IDIOGRAPH,
    DEFAULT_JUEJIN_ADDR,
    DEFAULT_NICKNAME,
    DEFAULT_PROVERB
} from "@/constants";

interface IProps {
    userinfo: UserSecurityAPI.Userinfo;
    proverbs: string[]|undefined;
}


const Author: React.FC<IProps> = (props) => {
    const {
        avatar=DEFAULT_AVATAR,
        nickname= DEFAULT_NICKNAME,
        idiograph=DEFAULT_IDIOGRAPH,
        githubAddr=DEFAULT_GITHUB_ADDR,
        juejinAddr=DEFAULT_JUEJIN_ADDR,
        csdnAddr=DEFAULT_CSDN_ADDR,
    } = props.userinfo;

    const {proverbs=[DEFAULT_PROVERB,DEFAULT_PROVERB]} = props;


    return (
        <>
            <div className={styles.card}>
                <div className={styles.info}>
                    <div className={styles.avatar} style={{backgroundImage: `url(${avatar})`}}></div>
                    <div className={styles.title}>{nickname}</div>
                    <div className={styles.subtitle}>{idiograph}</div>
                    <p className={styles.textBody}>{proverbs[Math.floor(Math.random() * proverbs.length)]}</p>
                </div>
                <ul className={styles.social} onClick={() => {
                    window.open(juejinAddr)
                }
                }>
                    <li className={styles.item}>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor"
                                  d="M12.383 2.001l-.014.005a7.024 7.024 0 0 0-5.926 5.043 5.742 5.742 0 0 0-4.02.583V2.001H.142v20.012h2.28v-5.452a5.314 5.314 0 0 1 5.314-5.315h.373a5.314 5.314 0 0 1 5.314 5.315v5.452h2.28V13.065a5.442 5.442 0 0 1 .909-3.04 4.844 4.844 0 0 1 4.08-1.796 4.684 4.684 0 0 1 2.927 1.52v-1.306h2.156v5.915a7.367 7.367 0 0 1-10.283 6.8c-1.953-1.003-3.177-2.842-3.177-4.937 0-3.285 2.68-5.964 5.965-5.964a5.973 5.973 0 0 1 5.314 3.194 6.16 6.16 0 0 1-.947 6.642 7.008 7.008 0 0 1-.707.632L12.383 2z"></path>
                        </svg>
                    </li>

                    <li className={styles.item} onClick={() => {
                        (`/blog/${getIdFromUrl(history.location.pathname)}/home`)
                        history.push(`/blog/${getIdFromUrl(history.location.pathname)}/home`)
                    }
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-house-door"
                             viewBox="0 0 16 16">
                            <path
                                d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
                        </svg>
                    </li>
                    <li className={styles.item} onClick={() => {
                        window.open(githubAddr)
                    }}>
                        <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path fill="black" id="right"
                                  d="M 8 3.86 C 8.7 3.86 9.38 3.95 10 4.13 C 11.55 3.09 12.22 3.31 12.22 3.31 C 12.66 4.41 12.38 5.23 12.3 5.43 C 12.81 6 13.12 6.7 13.12 7.58 C 13.12 10.65 11.25 11.33 9.47 11.53 C 9.76 11.78 10 12.26 10 13 C 10 14.08 10 14.94 10 15.21 C 10 15.42 10.15 15.67 10.55 15.59 C 13.806 14.491 16 11.437 16 8 C 16 3.58 12.42 0 8 0 Z">
                            </path>
                            <use href="#right" x="-16"/>
                        </svg>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default Author;
