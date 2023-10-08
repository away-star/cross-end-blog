import React, {useEffect, useLayoutEffect, useState} from 'react';
import HeaderNav from "@/layouts/HeaderNav";
import Footer from "@/layouts/Footer";
import Body from "@/layouts/Body";
import '@/global.less'
import {history} from "umi";
import {Button, message, notification, Space} from "antd";
import ParticleBackground from "@/components/ParticleBackground";
import {ExperimentOutlined, SmileOutlined} from "@ant-design/icons";
import ProField from "@ant-design/pro-field";
import {ProFieldFCMode} from "@ant-design/pro-provider";
import MyPop from "@/components/MyPop";
import {useLocation, useModel} from "@@/exports";
import {getUserinfo} from "../../../services/userSecurity/api/userController";
import {getIdFromUrl} from "@/utils/urlUtil";
import {localStorageUserSecurityKey} from "@/constants";
import Loading from "@/loading";
import UserInfoUpdate from "@/layouts/Body/component/UserInfoUpdate";
import BlogSettingUpdate from "@/layouts/Body/component/BlogSettingUpdate";


const Main = () => {
    const [api, contextHolder] = notification.useNotification();
    const [state, setState] = useState<ProFieldFCMode>('edit');
    const [plain, setPlain] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const {
        globalLoading,
        setGlobalLoading,
        userInfoModalOpen,
        setUserInfoModalOpen,
        blogSettingModalOpen,
        setBlogSettingModalOpen
    } = useModel('pageStatusModel', (model) => ({
        globalLoading: model.globalLoading,
        setGlobalLoading: model.setGlobalLoading,
        userInfoModalOpen: model.userInfoModalOpen,
        setUserInfoModalOpen: model.setUserInfoModalOpen,
        blogSettingModalOpen: model.blogSettingModalOpen,
        setBlogSettingModalOpen: model.setBlogSettingModalOpen
    }));

    const {initialUserData, setInitialUserData, fetchInitialUserData} = useModel('initialModel', (model) => ({
        setInitialUserData: model.setInitialUserData,
        initialUserData: model.initialUserData,
        fetchInitialUserData: model.fetchInitialUserData
    }));


    const {userinfo, securityInfo, labels, proverbs} = initialUserData!


    const btn = (
        <Space>
            <Button type="link" size="small" onClick={() => api.destroy('topRight')}>
                Destroy All
            </Button>
            <Button type="primary" size="small" onClick={() => {
                history.push('/checkIn')
            }
            }>
                登录/注册自己的博客以获得完整体验
            </Button>
        </Space>
    );


    const openNotification = () => {
        api.open({
            message: 'cross-end blog 温馨提示',
            description:
                '您正在访问他人博客，已禁用您的修改权限，祝您有良好的访问体验',
            icon: <SmileOutlined style={{color: '#108ee9'}}/>,
            btn,
            key: 'topRight',
            duration: 10,
        });
    };

    const openDebugNotification = () => {
        const key = 'leftBottom';
        api.open({
            message: '欢迎您参加此次测试',
            description:
                <div>
                    <p>测试版本不代表最终品质（会努力进阶的）</p>
                    <span>对此次测试的体验评分(每个id记最后一次)</span>
                    {visible ?
                        <ProField text={3.5} valueType="rate" mode={state} plain={plain} onChange={(value) => {
                            console.log(value)
                            message.success('感谢您的参与')
                            //api.destroy(key)
                            setVisible(false)
                            setState("read")
                        }}/> : <span>感谢您的参与</span>
                    }
                    <a href={'https://github.com/xingxing2064989403/starBlog'} target={'_blank'} rel="noreferrer"
                       style={{marginLeft: 10}}>
                        点击我前往提交issue
                    </a>
                </div>,
            icon: <ExperimentOutlined style={{color: '#108ee9'}}/>,
            placement: 'bottomLeft',
            key,
            duration: null,
        });
    };


    // 屏幕宽度小于屏幕高度
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(screen.availWidth < screen.availHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useLayoutEffect(() => {
        console.log(userInfoModalOpen)

        const fetchData = async () => {
            const res = await getUserinfo(
                {security_info_id: parseInt(getIdFromUrl(history.location.pathname))}
            )
            if (res.code === 200) {
                if (res.data?.securityInfo?.id?.toString() !== localStorage.getItem(localStorageUserSecurityKey)) {
                    openNotification()
                }
                setInitialUserData(res.data!)
            }
        }
        openDebugNotification()
        setGlobalLoading(true);
        fetchData().then(() => {
            setGlobalLoading(false);
        })
        return () => {
            api.destroy('topRight')
        }
    }, [])


    return (<>
            <MyPop visible={isSmallScreen}/>
            {contextHolder}
            {/*<UserInfoUpdate/>*/}
            {<BlogSettingUpdate text={"ss"}/>}
            <ParticleBackground/>
            {globalLoading ? ( // 如果数据还没加载完，就显示 loading 状态
                <Loading/>
            ) : (
                <div>
                    <HeaderNav/>
                    <Body/>
                    <Footer/>
                </div>
            )}
        </>
    );
};

export default Main;
