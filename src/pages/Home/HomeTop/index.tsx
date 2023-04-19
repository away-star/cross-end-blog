import {Image} from 'antd';
import React from 'react';
import styles from './Guide.less';


interface Props {
    proverb:string
}


const HomeTop: React.FC<Props> = (props) => {
    const {proverb}=props
    return (
        <div className={styles.homeTop}>
            <Image className={styles.img} preview={false}
                   src={`@/assets/home1.png`}/>
            <div className={styles.proverbs}>
                <p>{proverb}</p>
                <p>坚定的90%唯物主义者</p>
                <p>越努力越幸运</p>
            </div>
            <div className={styles.welcome}><p>欢迎来到小星的博客</p></div>
        </div>
    );
};

export default HomeTop;
