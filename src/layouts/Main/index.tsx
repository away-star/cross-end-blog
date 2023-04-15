import React, {useEffect} from 'react';
import HeaderNav from "@/layouts/HeaderNav";
import Footer from "@/layouts/Footer";
import Body from "@/layouts/Body";
import '@/global.less'
import styles from './index.less'
import {getInitialArgs, initialData} from "@/services/api";
import {useModel} from "@umijs/max";
import {history} from "umi";
import {message} from "antd";


const Main = () => {
    const pathParts = history.location.pathname.trim().split('/');
    const lastPart = pathParts[pathParts.length - 2];

    const {setInitialData} = useModel('initialModel', (model) => ({
        setInitialData: model.setInitialData,
    }));


    useEffect(
        () =>  {
            let loginInformationId = localStorage.getItem('loginInformationId')
            console.log(loginInformationId)
            if (lastPart !== loginInformationId) {
                loginInformationId=lastPart?lastPart:null
            }
            console.log(lastPart)
            const initial=async ()=>{
                const res=await getInitialArgs({loginInformationId:loginInformationId});
                console.log(res)
                if (res.code!==200){
                    message.error('查询不到此用户信息')
                    history.replace('/checkIn')
                    return
                }
                localStorage.setItem('loginInformationId', res?.data?.loginInformation?.id)
                const userInfo: UserInfoAPI.userInfoData = {
                    address: res.data.userInfoDto.address,
                    avatar: res.data.userInfoDto.avatar,
                    birthday: res.data.userInfoDto.birthday,
                    gender: res.data.userInfoDto.gender,
                    idiograph: res.data.userInfoDto.idiograph,
                    labelVenue: res.data.userInfoDto.labelVenue,
                    nickname: res.data.userInfoDto.nickname,
                    qq: res.data.userInfoDto.qq,
                    slideVenue: res.data.userInfoDto.slideVenue,
                    userLever: res.data.userInfoDto.userLever,
                    welcomeText: res.data.userInfoDto.welcomeText,
                }
                const initialData:initialData = {
                    personage: {
                        email: res.data.loginInformation.email,
                        loginInformationId: res.data.loginInformation.id,
                        proverbs: res.data.proverbs
                    }, userInfo: userInfo
                }
                setInitialData(initialData);
            }
            initial();
            // getInitialArgs({loginInformationId:loginInformationId}).then((res) => {
            //
            //     // if (res.data.code!==200){
            //     //     message.error('查询不到此用户信息')
            //     //     history.push('/checkIn')
            //     //     return
            //     // }
            //     //localStorage.setItem('loginInformationId', res?.data?.loginInformation?.id)
            //     const userInfo: UserInfoAPI.userInfoData = {
            //         address: res.data.userInfoDto.address,
            //         avatar: res.data.userInfoDto.avatar,
            //         birthday: res.data.userInfoDto.birthday,
            //         gender: res.data.userInfoDto.gender,
            //         idiograph: res.data.userInfoDto.idiograph,
            //         labelVenue: res.data.userInfoDto.labelVenue,
            //         nickname: res.data.userInfoDto.nickname,
            //         qq: res.data.userInfoDto.qq,
            //         slideVenue: res.data.userInfoDto.slideVenue,
            //         userLever: res.data.userInfoDto.userLever,
            //         welcomeText: res.data.userInfoDto.welcomeText,
            //     }
            //     const initialData:initialData = {
            //         personage: {
            //             email: res.data.loginInformation.email,
            //             loginInformationId: res.data.loginInformation.id,
            //             proverbs: res.data.proverbs
            //         }, userInfo: userInfo
            //     }
            //     setInitialData(initialData);
            // })

        }, []
    )


    return (<>
            <div className={styles.overallCSS}>
                {/*  <div className="videocontainer">
                <video className="fullscreenvideo" poster={"@/assets/backgroundImg.jpeg"} id="bgvid" playsInline autoPlay
                       muted loop>
                    <source src={"@/assets/backgroundVideo.mp4"} type="video/mp4"/>
                </video>
            </div>*/}
                <HeaderNav/>
                <Body/>
                <Footer/>
            </div>
        </>
    );
};

export default Main;
