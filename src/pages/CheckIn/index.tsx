import React, {useEffect, useState} from 'react';
import './index.less'
import loginSvg from '@/assets/login.svg'
import registerSvg from '@/assets/register.svg'
import Login from "@/pages/CheckIn/component/Login";
import Register from "@/pages/CheckIn/component/Register";
import Recover from "@/pages/CheckIn/component/Recover";
import {Button, notification, Space} from "antd";
import {history} from "@@/core/history";
import {SmileOutlined} from "@ant-design/icons";
import MyPop from "@/components/MyPop";
import {useLocation} from "@@/exports";
import classNames from "classnames";


export const onRegister = () => {
    const container = document.querySelector(".container");
    console.log(container)
    container?.classList.add("sign-up-mode");
}

export const onLogin = () => {
    const container = document.querySelector(".container");
    container?.classList.remove("sign-up-mode");
}

const CSSLogin: React.FC = () => {
    console.log(useLocation().pathname)
    console.log(history.location.pathname)
    const [api, contextHolder] = notification.useNotification();

    const [isSmallScreen, setIsSmallScreen] = useState(false);


    const btn = (
        <Space>
            <Button type="primary" size="middle" onClick={() => {
                history.push('/blog/20211120053/home')
            }
            }>
                暂不登录先前往作者博客瞅瞅
            </Button>
        </Space>
    );


    const openNotification = () => {
        api.open({
            message: '先体验？',
            icon: <SmileOutlined style={{color: '#108ee9'}}/>,
            btn,
            key: 'top',
            placement: 'top',
            duration: null,
        });
    };
    useEffect(() => {

        const handleResize = () => {
            setIsSmallScreen(screen.availWidth < screen.availHeight);
        };

        handleResize();
        openNotification()

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (

        <div className="container">
            <MyPop visible={isSmallScreen}/>
            {contextHolder}
            <div className="forms-container">
                <div className="signin-signup">
                    <div className={classNames("sign-in-form", "form")}>
                        <Login/>
                    </div>
                    <div className={classNames("sign-up-form", "form")}>
                        <Register/>
                    </div>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>加入我们</h3>
                        <p>
                            加入我们，成为本站的一份子。
                        </p>
                        <button className="btn transparent" id="sign-up-btn" onClick={onRegister} type={"button"}>
                            去注册
                        </button>
                    </div>
                    <img src={loginSvg} className="image" alt=""/>
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>已有帐号？</h3>
                        <p>
                            立即登录已有帐号，享受独家权益。
                        </p>
                        <button className="btn transparent" id="sign-in-btn" onClick={onLogin} type={"button"}>
                            去登录
                        </button>
                    </div>
                    <img src={registerSvg} className="image" alt=""/>
                </div>
                <Recover/>
            </div>
        </div>
    );
};

export default CSSLogin;
