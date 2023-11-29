import {ModalForm, ProFormSelect, ProFormTextArea, ProFormUploadButton,} from '@ant-design/pro-components';
import {message} from 'antd';
import React, {useEffect, useState} from 'react';
import {ProFormSwitch} from "@ant-design/pro-form";

import PostBtn from "@/components/btn/PostBtn";
import {history, useModel} from "umi";
import {savePost} from "../../../../../services/content/api/postController";
import {UploadFile} from "antd/es/upload/interface";
import {RcFile, UploadChangeParam} from "antd/es/upload";


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

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const handleUploadChange = ({file}: UploadChangeParam) => {
        if (file.status === 'done') {
            if (file.response.code === -10006) {
                message.error(file.response.msg).then(r => {
                    history.push('/checkin');   // 跳转到登录页
                })
            }
            file.url = file.response.data;
        }
    };

    useEffect(() => {
        if (initialUserData.securityInfo === undefined) {
            history.push('/')
        }
    },[])


    return (
        <>
            <ModalForm
                layout={'horizontal'}
                {...formItemLayout}
                title="确认发布"
                open={modalVisit}
                onFinish={async (values) => {
                    if (values.cover[0].url === undefined) {
                        message.error('请上传封面')
                        return false
                    }
                    if (values.description === undefined) {
                        message.error('请填写简介')
                        return false
                    }
                    const post: ContentAPI.PostRequest = {
                        description: values.description,
                        labelId: values.labelId,
                        content: postWriteData.content,
                        coverUrl: values.cover[0].url,
                        publicFlag: values.publicFlag,
                        title: postWriteData.title
                    }
                    const res = await savePost(post)
                    if (res.code === 200) {
                        message.success('发布成功')
                        setModalVisit(false)
                        setTimeout(() => {
                            history.back()
                        }, 1000)
                    } else if (res.code === -1) {
                        message.error(res.msg)
                        setTimeout(() => {
                            history.push('/checkin')
                        }, 1000)
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
                    name="labelId"
                    label="文章标签分类"
                    valueEnum={
                        //遍历labels，让每个label的id作为valueEnum的key，title作为valueEnum的value
                        labels?.reduce((pre, cur) => {
                            pre[cur.id!] = cur.title
                            return pre
                        }, {} as any)
                    }
                    placeholder="Please select a category"
                    initialValue={labels?.[0].title}
                    // rules={[{ required: true, message: 'Please select your mood!' }]}
                />
                <ProFormTextArea
                    name="description"
                    label="文章简介"
                    placeholder="写简介！写简介！写简介！重要的事情说三遍！"
                    wrapperCol={{span: 12}}
                    fieldProps={{autoSize: {minRows: 3, maxRows: 10}}}
                />
                {/*<ProForm.Item label="cover" name="cover" wrapperCol={{span: 13}}>*/}
                {/*    /!*<MyUpload  onUploadSuccess={()=>{('666')}}/>*!/*/}
                {/*    <MyUpload onUploadSuccess={onUploadSuccess} type={'picture-card'}/>*/}
                {/*</ProForm.Item>*/}
                <ProFormUploadButton
                    name="cover"
                    label="文章背景"
                    max={1}
                    fieldProps={{
                        name: 'file',
                        listType: 'picture-card',
                        headers: {'Authorization': localStorage.getItem('Authorization')!},
                        onPreview: onPreview,
                        onChange: handleUploadChange
                    }}
                    action='/source/image/upload'
                />
                <ProFormSwitch label={'isPublic'} name={'publicFlag'} initialValue={true}/>
            </ModalForm>
        </>
    );
};
