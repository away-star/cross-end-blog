import PersonCard from "@/pages/Square/componnet/PersonCard";
import React, {useEffect, useState} from "react";
import styles from './index.less';
import {Col, Row} from "antd";
import Head from "@/components/Head";
import squareBack from '@/assets/squareBack.png'
import {getAllUsers} from "@/services/api";
import defaultImg from "@/assets/defaultImg.png";
import {DEFAULT_AVATAR, DEFAULT_WelcomeText, DOMAIN_PREFIX} from "@/constants";
import {history} from "umi";

const randCover = (value:string[]) => {
    return value[Math.floor(Math.random() * value.length)];
}


const Square: React.FC = () => {
    const [userInfos, setUserInfos] = useState<UserInfoAPI.userInfoData[]>([]);

    const fetchData = async () => {
        const res = await getAllUsers();
        if (res.code === 200) {
            console.log(res.data);
            setUserInfos(res.data);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

        return (
            <>
                <Head title={'用户广场'} subTitle={'允许公开自己的个人博客者将在此展示哦'} backUrl={squareBack}/>
                <Row justify={"center"}>
                    <Col span={18} style={{alignItems: "center"}}>
                        <div className={styles.shell}>
                            {userInfos.map((userInfo, index) => {
                                return (<div className={styles.card} key={index} onClick={()=>{
                                    window.open(DOMAIN_PREFIX+`/blog/${userInfo.loginInformationId}/home`)
                                    }
                                    }>
                                        <PersonCard avatar={userInfo.avatar??DEFAULT_AVATAR} cover={randCover(userInfo.slideVenue??[defaultImg])} idiograph={userInfo.idiograph??DEFAULT_WelcomeText} nickName={userInfo.nickname??'匿名'}/>
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                </Row>
            </>
            // <PersonCard title={cards[0].title} description={cards[0].description} cover={cards[0].cover}/>
        );
    }
;

export default Square;
