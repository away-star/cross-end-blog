import {
    ModalForm,
    ProForm,
    ProFormSelect,
    ProFormTextArea,
} from '@ant-design/pro-components';
import {message} from 'antd';
import React, {useState} from 'react';
import {ProFormSwitch} from "@ant-design/pro-form";
import MyUpload from "@/components/MyUpload";

import PostBtn from "@/components/btn/PostBtn";
import {useModel,history} from "umi";
import {savePost} from "../../../../../services/content/api/postController";


const formItemLayout = {
    labelCol: {span: 6},
    wrapperCol: {span: 6},
};


export default () => {
    const [modalVisit, setModalVisit] = useState(false);
    const {initialUserData, setInitialUserData, fetchInitialUserData} = useModel('initialModel', (model) => ({
        setInitialUserData: model.setInitialUserData,
        initialUserData: model.initialUserData,
        fetchInitialUserData: model.fetchInitialUserData
    }));
    const {userinfo, securityInfo, labels, proverbs} = initialUserData!


    const {postWriteData, setPostWriteData} = useModel('writeModel', (model) => ({
        postWriteData: model.postWriteData,
        setPostWriteData: model.setPostWriteData,
    }));

    const [cover, setCover] = useState<string>();

    const onUploadSuccess = (fileUrls: string[]) => {
        setCover(fileUrls[0]);
        console.log(fileUrls)
    }



    return (
        <>
            <ModalForm
                layout={'horizontal'}
                {...formItemLayout}
                title="确认发布"
                open={modalVisit}
                onFinish={async (values) => {
                    if (cover === undefined) {
                        message.error('请上传封面')
                        return false
                    }
                    if (values.description === undefined) {
                        message.error('请填写简介')
                        return false
                    }
                    const post: ContentAPI.PostRequest = {
                        description: values.description,
                        category: values.category,
                        content: postWriteData.content,
                        coverUrl: cover,
                        isPublic: values.open,
                        title: postWriteData.title
                    }
                    const res = await savePost(post)
                    if (res.code === 200) {
                        message.success('发布成功')
                        setModalVisit(false)
                        setTimeout(()=>{
                            history.back()
                        },1000)
                    }else if (res.code===-1){
                        message.error(res.msg)
                        setTimeout(()=>{
                            history.push('/checkin')
                        },1000)

                    }

                }}
                onOpenChange={setModalVisit}
                trigger={
                    <PostBtn text={'发布'} onclick={() => {
                        if (postWriteData.content === undefined || postWriteData.content === '') {
                            message.error('请先写文章')
                        } else if (postWriteData.title === undefined || postWriteData.title === '') {
                            message.error('请先写标题')
                        } else {
                            setModalVisit(true)
                        }
                    }
                    }/>
                }
            >
                <ProFormSelect
                    name="category"
                    label="category"
                    valueEnum={{
                        '1': '前端',
                        '2': '后端',
                    }}
                    placeholder="Please select a category"
                    initialValue={labels?.[0].title}
                    // rules={[{ required: true, message: 'Please select your mood!' }]}
                />
                <ProFormTextArea
                    name="description"
                    label="description"
                    placeholder="写简介！写简介！写简介！重要的事情说三遍！"
                    wrapperCol={{span: 12}}
                    fieldProps={{autoSize: {minRows: 3, maxRows: 10}}}
                />
                <ProForm.Item label="cover" name="cover" wrapperCol={{span: 13}}>
                    {/*<MyUpload  onUploadSuccess={()=>{console.log('666')}}/>*/}
                    <MyUpload onUploadSuccess={onUploadSuccess} type={'picture-card'}/>
                </ProForm.Item>
                <ProFormSwitch label={'isPublic'} name={'open'} initialValue={true}/>
            </ModalForm>
        </>
    );
};
