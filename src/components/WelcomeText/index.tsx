
import React from 'react';
import './welcomeText.less'

interface Props {
  name: string;
}

// 脚手架示例组件
const WelcomeText: React.FC<Props> = (props) => {
  const { name } = props;
  return (
      <div className="welcomeText">
          <div className="welcomeTextContent">
              <div className="welcomeTextFront">
                  <h3 className="welcomeTextTitle">Hey</h3>
                  <p className="welcomeTextSubTitle">欢迎来到小星的博客</p>
              </div>

              <div className="welcomeTextBack">
                  <p className="welcomeTextDescription">
                      Cool description so you can read it too my friend
                  </p>
              </div>
          </div>
      </div>

  );
};

export default WelcomeText;
