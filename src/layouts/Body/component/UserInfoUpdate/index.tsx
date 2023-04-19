import {
    ModalForm,
    ProForm,
    ProFormText,
    ProFormTextArea,
} from '@ant-design/pro-components';
import {Button} from 'antd';
import React, {useState} from 'react';
import MyUpload from "@/components/MyUpload";
import {useModel} from "@@/exports";
import {ProFormDatePicker, ProFormRadio} from "@ant-design/pro-form";
import {ProFormGroup, ProFormList} from "@ant-design/pro-form/lib";


const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 13},
};

export default () => {

    const [images, setImages] = useState<string[]>([]);
    const [avatar, setAvatar] = useState<string>();
    const onAvatarUploadSuccess = (fileUrls: string[]) => {
        setAvatar(fileUrls[0]);
        console.log(fileUrls)
    }

    const {
        initialData,
        setInitialData,
        userInfoModalOpen,
        setUserInfoModalOpen
    } = useModel('initialModel', (model) => ({
        initialData: model.initialData,
        setInitialData: model.setInitialData,
        userInfoModalOpen: model.userInfoModalOpen,
        setUserInfoModalOpen: model.setUserInfoModalOpen,
    }));


    return (
        <>
            <ModalForm
                layout={'horizontal'}
                {...formItemLayout}
                title="博客个人信息修改"
                open={userInfoModalOpen}
                onFinish={async () => {
                }}
                onOpenChange={setUserInfoModalOpen}
                trigger={
                    // <GoTo text={'记录随笔'} onclick={() => setUserInfoModalOpen(true)}/>
                    <Button type="primary" onClick={() => setUserInfoModalOpen(true)}>
                        修改个人信息
                    </Button>
                }
            >

                <ProFormText
                    name="nickname"
                    label="昵称"
                    wrapperCol={{span: 13}}
                    placeholder="稍微短一点"
                    initialValue={initialData.userInfo?.nickname}
                    //rules={[{required: true, message: '请输入昵称'}]}
                />
                <ProFormText
                    name="nickname"
                    label="副昵称"
                    wrapperCol={{span: 13}}
                    placeholder="稍微长一点"
                    initialValue={initialData.userInfo?.nickname}
                    //rules={[{required: true, message: '请输入昵称'}]}
                />
                <ProForm.Item label="头像" name="avatar" wrapperCol={{span: 13}}>
                    <MyUpload onUploadSuccess={onAvatarUploadSuccess} type={'picture-circle'}/>
                </ProForm.Item>
                <ProFormRadio.Group
                    name="radio-button"
                    label="性别"
                    radioType="button"
                    initialValue={'保密'}
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
                <ProFormDatePicker name="birthday" label="生日"/>
                <ProFormText
                    name="QQ"
                    label="QQ"
                    placeholder={'qq'}
                    rules={[
                        {
                            required: true,
                            message: '请输入QQ号!',
                        },
                        {
                            pattern: /^[1-9][0-9]{4,}$/g,
                            message: 'qq格式错误!',
                        }
                    ]}
                />
                <ProFormTextArea
                    name="idiograph"
                    label="个人签名"
                    //显示字数
                    placeholder="写下个性呐！"
                    fieldProps={{autoSize: {minRows: 2, maxRows: 5}, showCount: true, maxLength: 100, allowClear: true}}
                />
                <ProForm.Item label="首页展示图" name="slideVenue" wrapperCol={{span: 13}}>
                    <MyUpload onUploadSuccess={onAvatarUploadSuccess} type={'picture-card'} maxCount={5}
                              defaultPictureUrl={initialData.userInfo?.slideVenue}/>
                </ProForm.Item>
                <ProFormText
                    name="csdnAddr"
                    label="CSDN地址"
                    wrapperCol={{span: 13}}
                    placeholder="此项非必需项哦"
                    initialValue={initialData.userInfo?.csdnAddr}
                    //rules={[{required: true, message: '请输入昵称'}]}
                />
                <ProFormText
                    name="githubAddr"
                    label="github地址"
                    wrapperCol={{span: 13}}
                    placeholder="此项非必需项哦"
                    initialValue={initialData.userInfo?.githubAddr}
                    //rules={[{required: true, message: '请输入昵称'}]}
                />
                <ProFormText
                    name="juejinAddr"
                    label="掘金地址"
                    wrapperCol={{span: 13}}
                    placeholder="此项非必需项哦"
                    initialValue={initialData.userInfo?.juejinAddr}
                    //rules={[{required: true, message: '请输入昵称'}]}
                />

                <ProFormList
                    name="labels"
                    label="用户信息"
                    initialValue={[
                        {
                            value: 333,
                            label: '333',
                        },
                    ]}
                    copyIconProps={{
                        tooltipText: '复制此行到末尾',
                    }}
                    deleteIconProps={{
                        tooltipText: '不需要这行了',
                    }}
                >
                    <ProFormGroup key="group">
                        <ProFormText name="value" label="值" />
                        <ProFormText name="label" label="显示名称" />
                    </ProFormGroup>
                </ProFormList>


                {/*<ProFormSelect*/}
                {/*    name="mood"*/}
                {/*    label="今日心情"*/}
                {/*    request={async () => [*/}
                {/*        {label: 'sad', value: 'sad'},*/}
                {/*        {label: 'happy', value: 'happy'},*/}
                {/*        {label: 'tired', value: 'tired'},*/}
                {/*        {label: 'enrich', value: 'enrich'},*/}
                {/*    ]}*/}
                {/*    placeholder="Please select a mood"*/}
                {/*    // rules={[{ required: true, message: 'Please select your mood!' }]}*/}
                {/*/>*/}
                {/*<ProFormTextArea*/}
                {/*    name="content"*/}
                {/*    label="随笔内容"*/}
                {/*    placeholder="用文字写下今日心情吧！"*/}
                {/*    wrapperCol={{span: 12}}*/}
                {/*    fieldProps={{autoSize: {minRows: 3, maxRows: 10}}}*/}
                {/*/>*/}
                {/*<ProForm.Item label="图片" name="file" wrapperCol={{span: 13}}>*/}
                {/*    /!*<MyUpload  onUploadSuccess={()=>{console.log('666')}}/>*!/*/}
                {/*    <MyUpload onUploadSuccess={onUploadSuccess} type={'picture-card'}/>*/}
                {/*</ProForm.Item>*/}
                {/*<ProFormSwitch label={'isPublic'} name={'open'} initialValue={true}/>*/}
            </ModalForm>
        </>
    );
};
