import React from 'react';
import styles from './index.less';

interface IProps {
    text: string;
}

const BackHome: React.FC<IProps> = (props) => {
    const { text } = props;

    return (
        <button type="button" className={styles.button}>
            {text}
        </button>
    );
};

export default BackHome;
