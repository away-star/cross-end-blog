
import React from 'react';

import './index.less'

interface Props {
  name: string;


  nameHider: string;
}

// 脚手架示例组件
const Button1: React.FC<Props> = (props) => {
  const { name, nameHider} = props;
  return (
    /*  <div className={"buttonx"}>
      <buttonx className="button1">Hover!</buttonx>
      </div>*/
      <button className="cta">
          <span>{name}</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
      </button>
  );
};

export default Button1;
