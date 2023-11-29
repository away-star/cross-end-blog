import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

interface IProps {
    text: string;
}

const MySearch: React.FC<IProps> = (props) => {
    const { text } = props;

    return (
        <div className={classNames(styles.inputWrapper)}>
            <button className={classNames(styles.icon)} type={"button"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
                    <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="1.3"
                        stroke="#022d2d"
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    ></path>
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.3" stroke="#022d2d" d="M22 22L20 20"></path>
                </svg>
            </button>
            <input
                placeholder="search.."
                className={classNames(styles.input)}
                name="text"
                type="text"
            />
        </div>
    );
};

export default MySearch;