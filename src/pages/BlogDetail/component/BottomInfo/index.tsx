import React from 'react';
import styles from './index.less';

interface IProps {
    juejin: string;
    csdn: string;
    slogan: string;
}

// 脚手架示例组件
const BottomInfo: React.FC<IProps> = (props) => {
    const {juejin, csdn, slogan} = props;
    return (
        <div className={styles.info}>
            <span>作者csdn主页:</span><a href={juejin} target={'_blank'}>{juejin}</a><br/><br/>
            <span>作者掘金主页:</span><a href={csdn} target={'_blank'}>{csdn}</a>
            <p>{slogan}</p>
        </div>
    );
};

export default BottomInfo;
