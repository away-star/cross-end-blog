import React from 'react';
import styles from './index.less';

interface IProps {
    text: string;
}

// 脚手架示例组件
const MyMenu: React.FC<IProps> = (props) => {
    const {text} = props;
    return (
        <label htmlFor="burger" className={styles.burger}>
            <input id="burger" type="checkbox">
                <span></span>
                <span></span>
                <span></span></input>
        </label>
    );
};

export default MyMenu;
