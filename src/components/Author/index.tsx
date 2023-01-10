import {useAccess } from '@umijs/max';
import {Tooltip} from 'antd';

import './author.less'
import React from "react";


const Author: React.FC = () => {
    const access = useAccess();
    return (
        <div className="author">
            <div className="card-info">
                <div className="card-avatar">
                </div>
                <div className="card-title">star</div>
                <div className="card-subtitle">小星小星，云淡风轻</div>
            </div>
            <ul className="card-social">
                <li className="card-social__item">
                    <Tooltip title="关于" color={'#c1e2cd'}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
                    </svg>
                    </Tooltip>
                </li>
                <Tooltip title="首页" color={'#e1bf41'}>
                <li className="card-social__item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-house-door" viewBox="0 0 16 16">
                        <path
                            d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
                    </svg>
                </li>
                </Tooltip>
                <Tooltip title="Github" color={'#e4dec9'}>
                <li className="card-social__item" >
                    <svg  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path fill="black" id="right"
                              d="M 8 3.86 C 8.7 3.86 9.38 3.95 10 4.13 C 11.55 3.09 12.22 3.31 12.22 3.31 C 12.66 4.41 12.38 5.23 12.3 5.43 C 12.81 6 13.12 6.7 13.12 7.58 C 13.12 10.65 11.25 11.33 9.47 11.53 C 9.76 11.78 10 12.26 10 13 C 10 14.08 10 14.94 10 15.21 C 10 15.42 10.15 15.67 10.55 15.59 C 13.806 14.491 16 11.437 16 8 C 16 3.58 12.42 0 8 0 Z">
                        </path>
                        <use href="#right" x="-16"  />
                    </svg>
                </li>
                </Tooltip>
            </ul>
        </div>
    );
};

export default Author;
