import {
    ModalForm,
    ProFormGroup,
    ProFormList,
    ProFormText,
    ProFormTextArea,
    ProFormUploadButton,
} from '@ant-design/pro-components';
import {message} from 'antd';
import React from 'react';
import {useModel} from "@@/exports";
import {history} from "umi";
import {sourceTarget} from "@/constants";
import {RcFile, UploadChangeParam} from "antd/es/upload";
import {UploadFile} from "antd/es/upload/interface";
import {updateBlogSetting} from "../../../../../services/userSecurity/api/userController";


interface IProp {
    text?: string;
}

const beforeUpload = (file: RcFile) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
        message.error('You can only upload image files!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.warning('we suggest the picture > 2MB!');
    }
    return isImage;
};

const BlogSettingUpdate: React.FC<IProp> = (props) => {


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

    const upFinish = async (e: Record<string, any>) => {
        // await updateBlogSetting({    labelList: ,
        //     proverbList:
        //     slideVenue: })

        message.success('提交成功');
        history.replace(`/blog/${securityInfo?.id}/home`);
        // return true;
    }

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
            console.log(file.response.code)
            if (file.response.code === -10006) {
                message.error(file.response.msg).then(r => {
                    history.push('/checkin');   // 跳转到登录页
                })
            }
            file.url = file.response.data;
        }

    };


    return (
        <>
            <ModalForm
                title="博客设置"
                open={blogSettingModalOpen}
                onFinish={async (e) => {
                    console.log(e)
                    const requestArgs: UserSecurityAPI.BlogSettingRequest = {
                        labelList: e.labelList.map((item: any, index) => {
                            return {
                                title: item.title,
                                subTitle: item.subTitle,
                                backgroundImg: item.backgroundImg ? item.backgroundImg[0].url : undefined
                            }
                        }),
                        proverbList: e.proverbs.map((item: any, index) => {
                            return {
                                context: item.context,
                            }
                        }),
                        slideVenue: e.slideVenue.map((item: any, index) => {
                            return item.url;
                        })
                    }
                    const res = await updateBlogSetting(requestArgs);
                    if (res.code === 200) {
                        message.success("更新成功！")
                        history.push('/')
                    } else {
                        message.error("更新失败！")
                    }
                    return false;
                }}
                onOpenChange={setBlogSettingModalOpen}
                width={'80%'}
            >
                <ProFormList
                    max={5}
                    name="labelList"
                    label="博客文章标签管理"
                    rules={[
                        {
                            required: true,
                            validator: async (_, value) => {
                                if (value && value.length > 0) {
                                    return;
                                }
                                throw new Error('至少要有一项！');
                            },
                        },
                    ]}
                    initialValue={labels?.map((item, index) => {
                        return {
                            title: item.title,
                            subTitle: item.subTitle,
                            backgroundImg: item.backgroundImg ? [
                                {
                                    name: 'image.png',
                                    status: 'done',
                                    url:  item?.backgroundImg,
                                }] : undefined
                        }
                    })}
                >
                    <ProFormGroup key="group">
                        <ProFormText
                            name="title"
                            label="标签标题"
                            // wrapperCol={{span: }}
                            // placeholder="title"
                            //initialValue={initialData.userInfo?.nickname}
                            //rules={[{required: true, message: '请输入昵称'}]}
                        />
                        {/*<ProForm.Item label="标签页背景" name="backgroundImg">*/}
                        {/*    <MyUpload onUploadSuccess={()=>{*/}
                        {/*        */}
                        {/*    }} type={'picture-card'}/>*/}
                        {/*</ProForm.Item>*/}
                        <ProFormUploadButton
                            name="backgroundImg"
                            label="标签页背景"
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
                        <ProFormTextArea
                            name="subTitle"
                            label="标签页描述"
                            // width={'md'}
                            // wrapperCol={{span: 19}}
                            fieldProps={{
                                autoSize: {minRows: 3, maxRows: 5},
                                showCount: true,
                                // maxLength: 100,
                                allowClear: true
                            }}
                            width={"xl"}
                            //placeholder="标签页描述"
                            //initialValue={initialData.userInfo?.nickname}
                            //rules={[{required: true, message: '请输入昵称'}]}
                        />
                    </ProFormGroup>
                </ProFormList>
                <ProFormList
                    name="proverbs"
                    label="首页语录管理"
                    initialValue={proverbs?.map((item, index) => {
                            return {
                                context: item.context,
                                createPeople: item.createPeople,
                            }
                        }
                    )}
                >
                    <ProFormTextArea
                        name="context"
                        width={'md'}
                        // wrapperCol={{span: 19}}
                        fieldProps={{
                            autoSize: {minRows: 3, maxRows: 5},
                            showCount: true,
                            maxLength: 100,
                            allowClear: true
                        }}
                        // placeholder="标签页描述"
                        //rules={[{required: true, message: '请输入昵称'}]}
                    />
                </ProFormList>
                <ProFormUploadButton
                    name="slideVenue"
                    label="博客首页展示图管理"
                    max={7}
                    fieldProps={{
                        name: 'file',
                        listType: 'picture-card',
                        headers: {'Authorization': localStorage.getItem('Authorization')!},
                        onPreview: onPreview,
                        onChange: handleUploadChange,
                        beforeUpload: beforeUpload
                    }}
                    action='/source/image/upload'
                    initialValue={userinfo?.slideShow?.split(';').map((item, index) => {
                        console.log(item)
                        return {
                            uid: index,
                            name: item,
                            status: 'done',
                            url: item,
                        }
                    })}
                />
            </ModalForm>
        </>
    );
};

export default BlogSettingUpdate;