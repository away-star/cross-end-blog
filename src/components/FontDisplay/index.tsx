import { Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './Guide.less';

interface Props {
    name: string;
}

// 脚手架示例组件
const FontDisplay: React.FC<Props> = (props) => {
    const { name } = props;
    return (
        <h1 id="fontDisplay"></h1>

    );
};

export default FontDisplay;
