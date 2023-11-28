import PersonCard from "@/pages/Square/componnet/PersonCard";
import React, {useEffect, useState} from "react";
import styles from './index.less';
import {Col, Row} from "antd";
import Head from "@/components/Head";
import squareBack from '@/assets/squareBack.png'

import defaultImg from "@/assets/defaultImg.png";
import {DEFAULT_AVATAR, DEFAULT_WelcomeText, DOMAIN_PREFIX} from "@/constants";
import {getUsersList} from "../../../services/userSecurity/api/userController";


const randCover = (value: string[]) => {
    return value[Math.floor(Math.random() * value.length)];
}


const Square: React.FC = () => {
        const [userInfos, setUserInfos] = useState<UserSecurityAPI.UserInfoDto[]>([]);

        const fetchData = async () => {
            const res = await getUsersList({size: 20}
            );
            if (res.code === 200) {
                (res.data);
                setUserInfos({...userInfos, ...res.data?.records ?? []}); // 设置数据
            }
        }
        useEffect(() => {
            fetchData()
        }, [])


        return (
            <>
                <Head title={'用户广场'} subTitle={'允许公开自己的个人博客者将在此展示哦'} backUrl={squareBack}/>
                <Row justify={"center"}>
                    <Col span={18} style={{alignItems: "center"}}>
                        <div className={styles.shell}>
                            {userInfos.map((userInfo, index) => {
                                return (<div className={styles.card} key={index} onClick={() => {
                                        window.open(`/blog/${userInfo.securityInfo?.id}/home`)
                                    }
                                    }>
                                        <PersonCard avatar={userInfo.userinfo?.avatar ?? DEFAULT_AVATAR}
                                                    cover={randCover(userInfo.userinfo?.slideShow?.split(';') ?? [defaultImg])}
                                                    idiograph={userInfo.userinfo?.welcomeText ?? DEFAULT_WelcomeText}
                                                    nickName={userInfo.userinfo?.nickname ?? '匿名'}/>
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
