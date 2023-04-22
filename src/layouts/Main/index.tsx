import React, {useEffect, useState} from 'react';
import HeaderNav from "@/layouts/HeaderNav";
import Footer from "@/layouts/Footer";
import Body from "@/layouts/Body";
import '@/global.less'
import styles from './index.less'
import {getInitialArgs, initialData} from "@/services/api";
import {useModel} from "@umijs/max";
import {history} from "umi";
import {Button, message, notification, Space} from "antd";
import ParticleBackground from "@/components/ParticleBackground";
import {ExperimentOutlined, SmileOutlined} from "@ant-design/icons";
import ProField from "@ant-design/pro-field";
import {ProFieldFCMode} from "@ant-design/pro-provider";


const Main = () => {
    const pathParts = history.location.pathname.trim().split('/');
    const lastPart = pathParts[pathParts.length - 2];

    const {setInitialData} = useModel('initialModel', (model) => ({
        setInitialData: model.setInitialData,
    }));

    const [loading, setLoading] = useState(false);

    const [api, contextHolder] = notification.useNotification();
    const [state, setState] = useState<ProFieldFCMode>('edit');
    const [plain, setPlain] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(true);


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
                    {visible?
                    <ProField text={3.5} valueType="rate" mode={state} plain={plain} onChange={(value) => {
                        console.log(value)
                        message.success('感谢您的参与')
                        //api.destroy(key)
                       setVisible(false)
                        setState("read")
                    }}/>:<span>感谢您的参与</span>
                    }
                    <a href={'https://github.com/xingxing2064989403/starBlog'} target={'_blank'} rel="noreferrer" style={{marginLeft:10}}>
                    点击我前往提交issue
                </a>
                </div>,
            icon: <ExperimentOutlined style={{color: '#108ee9'}}/>,
            placement: 'bottomLeft',
            key,
            duration: 9999,
        });
    };


    useEffect(
        () => {
            let loginInformationId = localStorage.getItem('loginInformationId')
            console.log(loginInformationId)
            if (lastPart !== loginInformationId) {
                loginInformationId = lastPart ? lastPart : null
                openNotification()
            }
            console.log(lastPart)
            const initial = async () => {
                setLoading(true)
                const res = await getInitialArgs({loginInformationId: loginInformationId});
                console.log(res)
                if (res.code !== 200) {
                    message.error('查询不到此用户信息')
                    history.replace('/checkIn')
                    return
                }
                //localStorage.setItem('loginInformationId', res?.data?.loginInformation?.id)
                const userInfo: UserInfoAPI.userInfoData = {
                    csdnAddr: res.data.userInfoDto.csdnAddr,
                    githubAddr: res.data.userInfoDto.githubAddr,
                    juejinAddr: res.data.userInfoDto.juejinAddr,
                    subname: res.data.userInfoDto.subname,
                    address: res.data.userInfoDto.address,
                    avatar: res.data.userInfoDto.avatar,
                    birthday: res.data.userInfoDto.birthday,
                    gender: res.data.userInfoDto.gender,
                    idiograph: res.data.userInfoDto.idiograph,
                    nickname: res.data.userInfoDto.nickname,
                    qq: res.data.userInfoDto.qq,
                    slideVenue: res.data.userInfoDto.slideVenue,
                    userLever: res.data.userInfoDto.userLever,
                    welcomeText: res.data.userInfoDto.welcomeText
                }
                const initialData: initialData = {
                    personage: {
                        email: res.data.loginInformation.email,
                        loginInformationId: res.data.loginInformation.id,
                        proverbs: res.data.proverbs,
                        slideVenue: res.data.userInfoDto.slideVenue,
                        labels: res.data.labels
                    }, userInfo: userInfo
                }
                setInitialData(initialData);
                setLoading(false);
            }
            if (isNaN(Number(lastPart)) || Number(lastPart) === undefined) {
                console.log('lastPart===null||lastPart===undefined')
                return
            } else {
                initial();
                openDebugNotification()
            }

            //销毁
            return () => {
                api.destroy('leftBottom')
            }

        }, []
    )


    return (<>
            {contextHolder}
            <ParticleBackground/>
            {loading ? ( // 如果数据还没加载完，就显示 loading 状态
                <div>Loading...</div>
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
