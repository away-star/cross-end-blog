import React from 'react';
import styles from './index.less';

interface IProps {
    text: string;

    onclick?: () => void;
}

const Phamtom: React.FC<IProps> = (props) => {
    const { text ,onclick} = props;
    return (
        <button className={styles.button} type={"button"} onClick={onclick}>
            {text}
        </button>
    );
};

export default Phamtom;
