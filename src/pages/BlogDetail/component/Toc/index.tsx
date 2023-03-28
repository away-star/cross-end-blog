import React from 'react';
import styles from './index.less';
import MarkNav from 'markdown-navbar';
// The default style of markdown-navbar should be imported additionally
import 'markdown-navbar/dist/navbar.css';
import './index.less'


interface IProps {
    text: string;
}

// 脚手架示例组件
const Toc: React.FC<IProps> = (props) => {
    const {text} = props;
    return (
        <MarkNav
            className="article"
            source={text}
            headingTopOffset={40} //离顶部的距离
            ordered={false}   //是否显示标题题号1,2等
        />
    );
};

export default Toc;
