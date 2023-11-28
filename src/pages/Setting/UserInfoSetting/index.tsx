import {
    ProForm,
    ProFormText,
    ProFormTextArea
} from '@ant-design/pro-components';
import React from 'react';
import MyUpload from "@/components/MyUpload";
import styles from './index.less';
import {ProFormDatePicker, ProFormRadio} from "@ant-design/pro-form";
import {message} from "antd";
import {history} from "umi";
import {updateInfo} from "../../../../services/userSecurity/api/userController";

const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 13},
};

interface IProp {
    userInfoData: UserSecurityAPI.Userinfo | undefined;
}


const UserInfoSetting: React.FC<IProp> = (props) => {
    const {userInfoData} = props;
    const [avatar, setAvatar] = React.useState<string>();

    const onAvatarUploadSuccess = (fileUrls: string[]) => {
        (fileUrls)
        setAvatar(fileUrls[0]);
    }

    const upFinish = async (e: Record<string, any>) => {
        (e)
        (userInfoData);
        const res = await updateInfo({
            nickname: e.nickname,
            birthday: e.birthday,
            avatar: avatar,
            gender: e.gender,
            githubAddr: e.githubAddr,
            idiograph: e.idiograph,
            juejinAddr: e.juejinAddr,
            qq: e.qq,
            subname: e.subname,
            welcomeText: e.welcomeText,
        })
        if (res.code === 200) {
            message.success("更新成功！")
            history.push('/')
        } else {
            message.error("更新失败！")
        }
    }


    return (
        <ProForm onFinish={upFinish}
                 layout={'horizontal'}
                 {...formItemLayout}
                 className={styles.right}
        >
            <ProFormText
                name="nickname"
                label="昵称"
                wrapperCol={{span: 13}}
                placeholder="稍微短一点"
                initialValue={userInfoData?.nickname}
                //rules={[{required: true, message: '请输入昵称'}]}
            />
            <ProFormText
                name="welcomeText"
                label="欢迎语"
                wrapperCol={{span: 13}}
                placeholder="写下你的欢迎致辞吧"
                initialValue={userInfoData?.welcomeText}
                //rules={[{required: true, message: '请输入昵称'}]}
            />
            <ProFormText
                name="subname"
                label="副昵称"
                wrapperCol={{span: 13}}
                placeholder="稍微长一点"
                initialValue={userInfoData?.subname}
                //rules={[{required: true, message: '请输入昵称'}]}
            />
            <ProForm.Item label="头像" name="avatar" wrapperCol={{span: 13}}>
                <MyUpload onUploadSuccess={onAvatarUploadSuccess} type={'picture-circle'}
                          defaultPictureUrl={userInfoData?.avatar ? [userInfoData?.avatar] : undefined}/>
            </ProForm.Item>
            <ProFormRadio.Group
                name="gender"
                label="性别"
                radioType="button"
                initialValue={userInfoData?.gender}
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
            <ProFormDatePicker name="birthday" label="生日" initialValue={userInfoData?.birthday}/>
            <ProFormText
                name="qq"
                label="QQ"
                placeholder={'qq'}
                rules={[
                    {
                        pattern: /^[1-9][0-9]{4,}$/g,
                        message: 'qq格式错误!',
                    }
                ]}
                initialValue={userInfoData?.qq}
            />
            <ProFormTextArea
                name="idiograph"
                label="个人签名"
                //显示字数
                placeholder="写下个性呐！"
                fieldProps={{
                    autoSize: {minRows: 2, maxRows: 5},
                    showCount: true,
                    maxLength: 100,
                    allowClear: true
                }}
                initialValue={userInfoData?.idiograph}
            />
            <ProFormText
                name="csdnAddr"
                label="CSDN地址"
                wrapperCol={{span: 13}}
                placeholder="此项非必需项哦"
                initialValue={userInfoData?.csdnAddr}
                //rules={[{required: true, message: '请输入昵称'}]}
            />
            <ProFormText
                name="githubAddr"
                label="github地址"
                wrapperCol={{span: 13}}
                placeholder="此项非必需项哦"
                initialValue={userInfoData?.githubAddr}
                //rules={[{required: true, message: '请输入昵称'}]}
            />
            <ProFormText
                name="juejinAddr"
                label="掘金地址"
                wrapperCol={{span: 13}}
                placeholder="此项非必需项哦"
                initialValue={userInfoData?.juejinAddr}
            />
        </ProForm>
    );
};
export default UserInfoSetting;
