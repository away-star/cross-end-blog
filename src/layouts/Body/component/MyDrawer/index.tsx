import {
    DrawerForm,
} from '@ant-design/pro-components';
import {Affix, Button, Card, Col, Divider} from 'antd';
import React, {useState} from 'react';
import MySide from "@/components/btn/MySide";
import styles from './index.less';
import {history} from "umi";
import {useModel} from "@@/exports";
import BeautifiedCard from "@/layouts/Body/component/BeautifiedCard";


export default () => {
    const pathParts = history.location.pathname.trim().split('/');
    const idUrl = pathParts[pathParts.length - 2];

    const [drawerVisit, setDrawerVisit] = useState(false);

    const {initialUserData, setInitialUserData, fetchInitialUserData} = useModel('initialModel', (model) => ({
        setInitialUserData: model.setInitialUserData,
        initialUserData: model.initialUserData,
        fetchInitialUserData: model.fetchInitialUserData,
    }));
    const {userinfo, securityInfo, labels, proverbs} = initialUserData!

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

    return (
        <>
            <Affix offsetTop={40}>
                <div className={styles.side}><MySide text={'menu'} onClick={() => setDrawerVisit(true)}/></div>
            </Affix>
            <DrawerForm
                onOpenChange={setDrawerVisit}
                title="控制室"
                width={540}
                submitter={false}
                open={drawerVisit}
            >
                <Card title="创作中心:" bordered={false} style={{width: 500}}>
                    <Col>
                        {/*<div className={styles.blogBut}>*/}
                        {/*<Phamtom text={'写一篇博客'} onclick={()=>{*/}
                        {/*    history.push('/write')}*/}
                        {/*}/>*/}
                        {/*</div>*/}
                        {/*<EssayWrite/>*/}
                        <BeautifiedCard/>
                    </Col>
                </Card>
                <Divider plain={false}/>
                <Card title="配置中心:" bordered={false} style={{width: 500}}>
                    {/*<Button onClick={() => {*/}
                    {/*    history.push(`/blog/${idUrl}/setting`)*/}
                    {/*    setDrawerVisit(false)*/}
                    {/*    setBlogSettingModalOpen(true)*/}
                    {/*}*/}
                    {/*}>移步配置标签进行博客配置</Button>*/}
                    <Button onClick={() => {
                        setUserInfoModalOpen(true)
                    }}>相关功能敬请期待</Button>

                </Card>


            </DrawerForm>
        </>
    );
};
