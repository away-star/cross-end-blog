import {ModalForm, ProFormText, ProFormTextArea, ProFormUploadButton,} from '@ant-design/pro-components';
import React from 'react';
import {history, useModel} from "@@/exports";
import {ProFormDatePicker, ProFormRadio} from "@ant-design/pro-form";
import {UploadFile} from "antd/es/upload/interface";
import {RcFile, UploadChangeParam} from "antd/es/upload";
import {message} from "antd";
import {updateInfo} from "../../../../../services/userSecurity/api/userController";


const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 13},
};


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

const UserInfoUpdate: React.FC = () => {

    // pageStatusModel
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

    const {initialUserData, setInitialUserData, fetchInitialUserData} = useModel('initialModel', (model) => ({
        setInitialUserData: model.setInitialUserData,
        initialUserData: model.initialUserData,
        fetchInitialUserData: model.fetchInitialUserData,
    }));
    const {userinfo, securityInfo, labels, proverbs} = initialUserData!

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
                layout={'horizontal'}
                {...formItemLayout}
                title="博客个人信息修改"
                open={userInfoModalOpen}
                onFinish={async (values) => {
                    console.log(values)
                    const requestBody: UserSecurityAPI.UserinfoRequest = {
                        address: values.address,
                        birthday: values.birthday,
                        csdnAddr: values.csdnAddr,
                        gender: values.gender,
                        githubAddr: values.githubAddr,
                        idiograph: values.idiograph,
                        juejinAddr: values.juejinAddr,
                        nickname: values.nickname,
                        qq: values.qq,
                        subname: values.subname,
                        welcomeText: values.welcomeText,
                        avatar: values.avatar[0].url,
                    }
                    console.log(requestBody)
                    const res = await updateInfo(requestBody);
                    if (res.code === 200) {
                        message.success("更新成功！")
                        history.push('/')
                    } else {
                        message.error("更新失败！")
                    }
                }}
                onOpenChange={setUserInfoModalOpen}
                // trigger={
                //     // <GoTo text={'记录随笔'} onclick={() => setUserInfoModalOpen(true)}/>
                //     <Button type="primary" onClick={() => setUserInfoModalOpen(true)}>
                //         修改个人信息
                //     </Button>
                // }
            >
                <ProFormText
                    name="nickname"
                    label="昵称"
                    wrapperCol={{span: 13}}
                    placeholder="稍微短一点"
                    initialValue={userinfo?.nickname}
                    //rules={[{required: true, message: '请输入昵称'}]}
                />
                <ProFormText
                    name="subname"
                    label="副昵称"
                    wrapperCol={{span: 13}}
                    placeholder="稍微长一点"
                    initialValue={userinfo?.subname}
                    //rules={[{required: true, message: '请输入昵称'}]}
                />
                {/*<ProForm.Item label="头像" name="avatar" wrapperCol={{span: 13}}>*/}
                {/*    <MyUpload onUploadSuccess={onAvatarUploadSuccess} type={'picture-circle'}/>*/}
                {/*</ProForm.Item>*/}
                <ProFormUploadButton
                    name="avatar"
                    label="头像"
                    max={1}
                    fieldProps={{
                        name: 'file',
                        listType: 'picture-circle',
                        headers: {'Authorization': localStorage.getItem('Authorization')!},
                        onPreview: onPreview,
                        onChange: handleUploadChange,
                        beforeUpload: beforeUpload
                    }}
                    action='/source/image/upload'
                    initialValue={userinfo?.avatar ? [
                        {
                            name: 'image.png',
                            status: 'done',
                            url: userinfo?.avatar,
                        }] : undefined}
                />
                <ProFormRadio.Group
                    name="gender"
                    label="性别"
                    radioType="button"
                    initialValue={userinfo?.gender ?? '保密'}
                    options={[
                        {
                            label: '男',
                            value: '男',
                        },
                        {
                            label: '女',
                            value: '女',
                        },
                        {
                            label: '保密',
                            value: '保密',
                        },
                    ]}
                />
                <ProFormDatePicker name="birthday" label="生日" initialValue={userinfo?.birthday}/>
                <ProFormText
                    name="qq"
                    label="qq"
                    placeholder={'qq'}
                    initialValue={userinfo?.qq}
                    rules={[
                        {
                            required: true,
                            message: '请输入QQ号!',
                        },
                        {
                            pattern: /^(?!1[0-9]{10}$)[0-9]{5,16}$/g,
                            message: 'qq格式错误！',
                        }
                        ,
                        // {
                        //     pattern: /^[1-9][0-9]{4,}$/g,
                        //     message: 'qq格式错误!',
                        // }
                    ]}
                />
                <ProFormTextArea
                    name="idiograph"
                    label="个人签名"
                    //显示字数
                    placeholder="写下个性呐！"
                    fieldProps={{autoSize: {minRows: 2, maxRows: 5}, showCount: true, maxLength: 100, allowClear: true}}
                    initialValue={userinfo?.idiograph}
                />
                <ProFormText
                    name="welcomeText"
                    label="欢迎语"
                    wrapperCol={{span: 13}}
                    placeholder="此项非必需项哦"
                    initialValue={userinfo?.welcomeText}
                />
                <ProFormText
                    name="csdnAddr"
                    label="CSDN地址"
                    wrapperCol={{span: 13}}
                    placeholder="此项非必需项哦"
                    initialValue={userinfo?.csdnAddr}
                    //rules={[{required: true, message: '请输入昵称'}]}
                />
                <ProFormText
                    name="githubAddr"
                    label="github地址"
                    wrapperCol={{span: 13}}
                    placeholder="此项非必需项哦"
                    initialValue={userinfo?.githubAddr}
                    //rules={[{required: true, message: '请输入昵称'}]}
                />
            </ModalForm>
        </>
    );
};
export default UserInfoUpdate;