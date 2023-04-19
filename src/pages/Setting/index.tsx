import React, {useEffect, useState} from 'react';
import {Col, Row} from "antd";
import Head from "@/components/Head";
import styles from './index.less';
import {useModel} from "@@/exports";
import BlogSetting from "@/pages/Setting/BlogSetting";
import UserInfoSetting from "@/pages/Setting/UserInfoSetting";
import {history} from "umi";
import {sleep} from "@antfu/utils";
import Loading from "@/loading";


export default () => {

    const {
        initialData,getRandSlide
    } = useModel('initialModel', (model) => ({
        initialData: model.initialData,
        setInitialData: model.setInitialData,
        userInfoModalOpen: model.userInfoModalOpen,
        setUserInfoModalOpen: model.setUserInfoModalOpen,
        getRandSlide: model.getRandSlide
    }));

    useEffect(() => {
        if (!initialData) {
            history.push('/checkIn')
        }
        if (localStorage.getItem('Authorization') === null) {
            history.push('/checkIn')
        }
    },[initialData])

    if (!initialData) {
        return <Loading/>
    }


    return (
        <>
            <Head title={"博客配置中心"}
                  subTitle={'完成您的个性化配置吧'} backUrl={getRandSlide()}/>
            <Row justify={"center"} className={styles.setting}>
                <Col span={10} className={styles.left}>
                    <BlogSetting labels={initialData.personage?.labels}
                                 proverbs={initialData.personage?.proverbs}
                                 slideVenue={initialData.personage?.slideVenue??[]}/>
                </Col>
                <Col span={9} className={styles.right}>
                    <UserInfoSetting userInfoData={initialData.userInfo}/>
                </Col>
            </Row>
        </>
    );
};
