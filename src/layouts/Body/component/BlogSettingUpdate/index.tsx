import {
    ModalForm,
    ProForm, ProFormDateRangePicker, ProFormSelect,
    ProFormText,
    ProFormTextArea,
} from '@ant-design/pro-components';
import {Button, message} from 'antd';
import React, {useState} from 'react';
import MyUpload from "@/components/MyUpload";
import {useModel} from "@@/exports";
import {ProFormDigit, ProFormGroup, ProFormList} from "@ant-design/pro-form/lib";
import {ProFormDatePicker, ProFormFieldSet, ProFormRadio} from "@ant-design/pro-form";


const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 13},
};

interface IProp {
    text: string;
}

const BlogSettingUpdate: React.FC<IProp> = (props) => {

    const {text} = props;

    const [images, setImages] = useState<string[]>([]);
    const [avatar, setAvatar] = useState<string>();


    const {initialUserData, setInitialUserData, fetchInitialUserData} = useModel('initialModel', (model) => ({
        setInitialUserData: model.setInitialUserData,
        initialUserData: model.initialUserData,
        fetchInitialUserData: model.fetchInitialUserData,
    }));
    const {userinfo, securityInfo, labels, proverbs} = initialUserData!

    const onAvatarUploadSuccess = (fileUrls: string[]) => {
        setAvatar(fileUrls[0]);
        console.log(fileUrls)
    }


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
            <ModalForm
                title="新建表单"
                open={blogSettingModalOpen}
                onFinish={async () => {
                    message.success('提交成功');
                    return true;
                }}
                onOpenChange={setBlogSettingModalOpen}
            >
                <ProFormList
                    name="labelList"
                    label="博客文章标签管理"
                    rules={[
                        {
                            required: true,
                            validator: async (_, value) => {
                                console.log(value);
                                if (value && value.length > 0) {
                                    return;
                                }
                                throw new Error('至少要有一项！');
                            },
                        },
                    ]}
                    initialValue={[
                        {
                            backgroundImg: '1111',
                            title: '1111',
                            subTitle: 111,
                        },
                    ]}
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
                        <ProForm.Item label="标签页背景" name="backgroundImg">
                            <MyUpload onUploadSuccess={onAvatarUploadSuccess} type={'picture-card'}/>
                        </ProForm.Item>
                        <ProFormTextArea
                            name="subTitle"
                            label="标签页描述"
                            width={'md'}
                            // wrapperCol={{span: 19}}
                            fieldProps={{
                                autoSize: {minRows: 3, maxRows: 5},
                                showCount: true,
                                maxLength: 100,
                                allowClear: true
                            }}
                            //placeholder="标签页描述"
                            //initialValue={initialData.userInfo?.nickname}
                            //rules={[{required: true, message: '请输入昵称'}]}
                        />
                    </ProFormGroup>
                </ProFormList>
                <ProFormList
                    name="Proverbs"
                    label="首页语录管理"
                    initialValue={[
                        {
                            proverb: '1111',
                            name: '1111',
                        },
                    ]}
                >
                    <ProFormTextArea
                        name="proverb"
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

                <ProForm.Item label="博客首页展示图管理" name="slideVenue"
                              rules={[{required: true}]}>
                    <MyUpload onUploadSuccess={onAvatarUploadSuccess} type={'picture-card'} maxCount={5}/>
                </ProForm.Item>

            </ModalForm>
        </>
    );
};

export default BlogSettingUpdate;