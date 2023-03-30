import React from 'react';
import './card1.less'

interface Props {
    name: string;
}

// 脚手架示例组件
const Card1: React.FC<Props> = (props) => {
    const { name } = props;
    return (
        <div className="card1">
            <div className="card1-image"></div>
            <div className="card1-description">
                <p className="text-title"> Card Title</p>
                <p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor.</p>
            </div>
        </div>
    );
};

export default Card1;
