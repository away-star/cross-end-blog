import React, {useEffect, useState} from 'react';
import HeaderNav from "@/layouts/HeaderNav";
import Footer from "@/layouts/Footer";
import Body from "@/layouts/Body";
import '@/global.less'
import styles from './index.less'
import {getInitialArgs, initialData} from "@/services/api";
import {useModel} from "@umijs/max";
import {history} from "umi";
import {message, notification} from "antd";
import ParticleBackground from "@/components/ParticleBackground";
import {SmileOutlined} from "@ant-design/icons";




const Main = () => {
    const pathParts = history.location.pathname.trim().split('/');
    const lastPart = pathParts[pathParts.length - 2];

    const {setInitialData} = useModel('initialModel', (model) => ({
        setInitialData: model.setInitialData,
    }));

    const [loading, setLoading] = useState(true);

    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
            message: 'cross-end blog 温馨提示',
            description:
                '您正在访问他人博客，已禁用您的修改权限，祝您有良好的访问体验',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
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
            initial();
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
