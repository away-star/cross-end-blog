import React from 'react';
import './card2.less'

interface Props {
    name: string;
}

// 脚手架示例组件
const card2: React.FC<Props> = (props) => {
    const { name } = props;
    return (
        <div className="card2">
            <div className="header">

                <h1 className="title">欢迎来到小星的博客</h1>
            </div>

            <div className="content">
                <p>{name}
                </p>
            </div>
        </div>
    );
};

export default card2;
