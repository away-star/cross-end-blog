import {
    ModalForm,
    ProFormTextArea,
} from '@ant-design/pro-components';
import {message} from 'antd';
import React, {useState} from 'react';
import {ProFormSwitch} from "@ant-design/pro-form";
import SpaceBtn from "@/components/btn/SpaceBtn";
import {history} from "umi";
import {useModel} from "@@/exports";
import {messageLeaveAction} from "../../../../../services/social/api/messageLeaveController";


const formItemLayout = {
    labelCol: {span: 6},
    wrapperCol: {span: 6},
};


export default () => {


    const [modalVisit, setModalVisit] = useState(false);

    const {initialUserData, setInitialUserData, getRandSlide, fetchInitialUserData} = useModel('initialModel', (model) => ({
        setInitialUserData: model.setInitialUserData,
        initialUserData: model.initialUserData,
        getRandSlide: model.getRandSlide,
        fetchInitialUserData: model.fetchInitialUserData
    }));
    const {userinfo, securityInfo, labels, proverbs} = initialUserData!


    const goWrite = () => {
        if (localStorage.getItem('Authorization') === null || localStorage.getItem('Authorization') === undefined) {
            message.error('先登录才能留言哦').then(r => {
                    (r)
                    history.push('/checkIn')
                }
            );
            return;
        } else {
            setModalVisit(true)
        }
    }

    return (
        <>
            <ModalForm
                layout={'horizontal'}
                {...formItemLayout}
                title="留言"
                open={modalVisit}
                onFinish={async (values) => {
                    const res = await messageLeaveAction({
                        content: values.content,
                        to_user_id: securityInfo!.id!,
                    })
                    (res)
                    if (res.code === 200) {
                        message.success('留言成功')
                        window.location.reload()
                    } else {
                        message.error('留言失败')
                    }
                }}
                onOpenChange={setModalVisit}
                trigger={

                    <SpaceBtn text={'留下足迹'} onclick={goWrite}/>
                }
            >
                <ProFormTextArea
                    name="content"
                    label="留言"
                    placeholder="写下你的留言内容吧！"
                    wrapperCol={{span: 12}}
                    fieldProps={{autoSize: {minRows: 3, maxRows: 10}, showCount: true, maxLength: 70}}
                />
                <ProFormSwitch label={'isPublic'} name={'open'} initialValue={true}/>
            </ModalForm>
        </>
    );
};
