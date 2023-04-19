import {PlusOutlined} from '@ant-design/icons';
import {
    DrawerForm,
    ModalForm,
    ProForm,
    ProFormDateRangePicker,
    ProFormSelect,
    ProFormText,
} from '@ant-design/pro-components';
import {Affix, Button, Card, Col, Divider, message, Space} from 'antd';
import React, {useState} from 'react';
import MySide from "@/components/btn/MySide";
import styles from './index.less';
import SelectCard from "@/layouts/Body/component/SelectCard";
import ThreeD from "@/components/btn/ThreeD";
import GoTo from "@/components/btn/GoTo";
import Phamtom from "@/components/btn/Phamtom";
import {history} from "umi";
import EssayWrite from "@/layouts/Body/component/EssayWrite";
import {useModel} from "@@/exports";
import {ProFormGroup, ProFormList} from "@ant-design/pro-form/lib";
import BeautifiedCard from "@/layouts/Body/component/BeautifiedCard";

export default () => {
    const [drawerVisit, setDrawerVisit] = useState(false);
    const {
        initialData,
        setInitialData,
        userInfoModalOpen,
        setUserInfoModalOpen,
        blogSettingModalOpen,setBlogSettingModalOpen
    } = useModel('initialModel', (model) => ({
        initialData: model.initialData,
        setInitialData: model.setInitialData,
        userInfoModalOpen: model.userInfoModalOpen,
        setUserInfoModalOpen: model.setUserInfoModalOpen,
        blogSettingModalOpen: model.blogSettingModalOpen,
        setBlogSettingModalOpen: model.setBlogSettingModalOpen,
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
                    <Button onClick={()=>{
                        setUserInfoModalOpen(true)
                    }}>修改主题配置</Button>
                    <Button onClick={()=>{
                        setBlogSettingModalOpen(true)}
                    }>修改个人信息</Button>
                </Card>


            </DrawerForm>
        </>
    );
};
