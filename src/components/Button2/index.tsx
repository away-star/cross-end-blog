import React from 'react';
import './index.less';

interface Props {
    flag: string;
}

// 脚手架示例组件
const Button2: React.FC<Props> = (props) => {
    return (
        <button data-text="Awesome" className="button2">
            <span className="actual-text">&nbsp;{props.flag}&nbsp;</span>
            <span className="hover-text" aria-hidden="true">&nbsp;{props.flag}&nbsp;</span>
        </button>
    );
};

export default Button2;
