import React, {useEffect, useState} from 'react';
import {Col, Row} from "antd";
import Head from "@/components/Head";
import styles from './index.less';
import {useModel} from "@@/exports";
import BlogSetting from "@/pages/Setting/BlogSetting";
import UserInfoSetting from "@/pages/Setting/UserInfoSetting";
import {history} from "umi";
import Loading from "@/loading";


export default () => {

    const pathParts = history.location.pathname.trim().split('/');
    const idUrl = pathParts[pathParts.length - 2];


    const {slideVenue,initialUserData, setInitialUserData, getRandSlide, fetchInitialUserData} = useModel('initialModel', (model) => ({
        setInitialUserData: model.setInitialUserData,
        initialUserData: model.initialUserData,
        getRandSlide: model.getRandSlide,
        fetchInitialUserData: model.fetchInitialUserData,
        slideVenue: model.slideVenue
    }));
    const {userinfo, securityInfo, labels, proverbs} = initialUserData!

    useEffect(() => {
        ('')
        if (localStorage.getItem('Authorization') === undefined||localStorage.getItem('Authorization') === null) {
            history.push('/checkIn')
        }
        if (securityInfo?.id !== Number(idUrl)) {
            history.push(`/`)
        }
    },[])

    if (!initialUserData) {
        return <Loading/>
    }

    return (
        <>
            <Head title={"博客配置中心"}
                  subTitle={'完成您的个性化配置吧'} backUrl={getRandSlide()}/>
            <Row justify={"center"} className={styles.setting}>
                <Col span={10} className={styles.left}>
                    <BlogSetting labels={labels}
                                 proverbs={proverbs}
                                 slideVenue={slideVenue}/>
                </Col>
                <Col span={9} className={styles.right}>
                    <UserInfoSetting userInfoData={userinfo}/>
                </Col>
            </Row>
        </>
    );
};
