import React, {useEffect, useState} from 'react';
import './index.less'
import loginSvg from '@/assets/login.svg'
import registerSvg from '@/assets/register.svg'
import Login from "@/pages/CheckIn/component/Login";
import Register from "@/pages/CheckIn/component/Register";
import Recover from "@/pages/CheckIn/component/Recover";
import {Button, ConfigProvider, notification, Space, theme} from "antd";
import {history} from "umi";
import {SmileOutlined} from "@ant-design/icons";
import MyPop from "@/components/MyPop";
import {Helmet, useModel} from "@@/exports";
import classNames from "classnames";
import {HappyProvider} from "@ant-design/happy-work-theme";


export const onRegister = () => {
    const container = document.querySelector(".container");
    container?.classList.add("sign-up-mode");
}

export const onLogin = () => {
    const container = document.querySelector(".container");
    container?.classList.remove("sign-up-mode");
}

export const darkToken = {
    "colorSuccess": "#a3cb3e",
    "colorLink": "#71c4ef",
    "colorTextBase": "#ffffff",
    "fontSize": 15,
    "borderRadius": 10,
    "wireframe": true,
    "sizeStep": 5,
    "sizeUnit": 5,
    "colorBgBase": "#000",
    "colorPrimary": "#7d8a9c",
    "colorInfo": "#7d8a9c",
    "colorError": "#b93234",
    "colorWarning": "#a77f2e"
}

export const witheToken = {
    "fontSize": 15,
    "borderRadius": 10,
    "wireframe": true,
    "sizeStep": 5,
    "sizeUnit": 5,
    "colorPrimary": "#47e8e8",
    "colorInfo": "#47e8e8",
    "colorSuccess": "#6dee2d",
    "colorWarning": "#fabf49"
}


const CSSLogin: React.FC = () => {
    const [api, contextHolder] = notification.useNotification();

    const [isSmallScreen, setIsSmallScreen] = useState(false);


    const btn = (
        <Space>
            <Button type="primary" size="middle" onClick={() => {
                history.push('/blog/1709495853674270720/home')
            }
            }>
                暂不登录先前往作者博客瞅瞅
            </Button>
        </Space>
    );

    const {
        globalLoading,
        setGlobalLoading,
        userInfoModalOpen,
        setUserInfoModalOpen,
        blogSettingModalOpen,
        setBlogSettingModalOpen,
        darkEnv,
        setDarkEnv
    } = useModel('pageStatusModel', (model) => ({
        globalLoading: model.globalLoading,
        setGlobalLoading: model.setGlobalLoading,
        userInfoModalOpen: model.userInfoModalOpen,
        setUserInfoModalOpen: model.setUserInfoModalOpen,
        blogSettingModalOpen: model.blogSettingModalOpen,
        setBlogSettingModalOpen: model.setBlogSettingModalOpen,
        darkEnv: model.darkEnv,
        setDarkEnv: model.setDarkEnv
    }));


    const openNotification = () => {
        api.success({
            message: '先体验？去作者博客看看吧',
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
        <>
            <Helmet>
                <title>crossEnd-blog</title>
                <link rel={'icon'} href={require('@/assets/logo/logo-removebg-preview.png')} type={'image/x-icon'}/>
            </Helmet>
            <ConfigProvider theme={{
                token: witheToken,
                algorithm: theme.defaultAlgorithm,
                components: {},
            }}>
                <HappyProvider>
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
                                    <button className="btn transparent" id="sign-up-btn" onClick={onRegister}
                                            type={"button"}>
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
                                    <button className="btn transparent" id="sign-in-btn" onClick={onLogin}
                                            type={"button"}>
                                        去登录
                                    </button>
                                </div>
                                <img src={registerSvg} className="image" alt=""/>
                            </div>
                            <Recover/>
                        </div>
                    </div>
                </HappyProvider>
            </ConfigProvider>
        </>
    );
};

export default CSSLogin;
