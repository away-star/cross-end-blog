import {
    ProFormText,
    StepsForm,
} from '@ant-design/pro-components';
import {Button, message, Modal} from 'antd';
import {LockOutlined, MessageOutlined} from "@ant-design/icons";
import {getRecoverCaptcha,recover} from "@/services/api/check";
import React from "react";
import {useModel} from "@umijs/max";


const getCaptcha = async (value: any) => {
    message.loading('正在发送验证码');
    const res = await getRecoverCaptcha({email: value.email});
    if (res.code === 200) {
        message.destroy();
        message.success('验证码已发送');
        return true;
    } else {
        message.destroy();
        message.error(res.msg);
    }
}


export default () => {
    const {isCoverModalOpen, setIsCoverModalOpen} = useModel('checkModel', (model) => ({
        isCoverModalOpen: model.isCoverModalOpen,
        setIsCoverModalOpen: model.setIsCoverModalOpen,
    }));

    const goRecover = async (values: any) => {
        console.log(values)
        const registerData: CheckAPI.registerData = {
            captcha: values.captcha,
            email: values.email,
            password: values.password
        }
        const res = await recover(registerData)
        console.log(res)
        if (res.code === 200) {
            message.success('重置密码成功,快去登录吧');
            setIsCoverModalOpen(false)
        } else {
            message.error(res.msg);
        }
    }

    return (
        <Modal title="找回密码" open={isCoverModalOpen} footer={null} width={800} onCancel={()=>setIsCoverModalOpen(false)}>
            <StepsForm<{
                name: string;
            }>
                onFinish={goRecover}
                formProps={{
                    validateMessages: {
                        required: '此项为必填项',
                    },
                }}
                submitter={{
                    render: (props) => {
                        if (props.step === 0) {
                            return (
                                <Button type="primary" onClick={() => props.onSubmit?.()}>
                                    去第二步 {'>'}
                                </Button>
                            );
                        }

                        return [
                            <Button key="gotoTwo" onClick={() => props.onPre?.()}>
                                {'<'} 返回第一步
                            </Button>,
                            <Button type="primary" key="goToTree" onClick={() => props.onSubmit?.()}>
                                提交 √
                            </Button>
                        ];
                    },
                }}
            >
                <StepsForm.StepForm<{
                    name: string;
                }>
                    name="base"
                    title="输入邮箱"
                    onFinish={getCaptcha}
                    layout="horizontal"

                >
                    <ProFormText
                        name="email"
                        label="邮箱"
                        width="lg"
                        tooltip="请输入您的邮箱来接收验证码"
                        placeholder="请输入邮箱"
                        rules={[{required: true}]}
                    />
                </StepsForm.StepForm>


                <StepsForm.StepForm<{
                    confirm: string;
                }>
                    name="confirm"
                    title="修改密码"
                    // onFinish={goRegister}
                    layout="horizontal"
                    //让label和input对齐
                    labelCol={{span: 4}}
                >
                    <ProFormText
                        name="captcha"
                        label="验证码"
                        width="sm"
                        placeholder="请输入验证码"
                        rules={[{required: true}]}
                        fieldProps={{

                            prefix: <MessageOutlined className={'prefixIcon'}/>,
                        }}

                    />
                    <ProFormText.Password
                        name="password"
                        label="新密码"
                        fieldProps={{
                            size: 'large',
                            prefix: <LockOutlined className={'prefixIcon'}/>,
                        }}
                        placeholder={'Password'}
                        rules={[
                            {
                                required: true,
                                message: '请输入密码！',
                            },
                            {
                                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: '密码必须包字母和数字，且长度为不少于8个字符！',
                            },
                        ]}
                    />
                    <ProFormText.Password
                        name="confirm"
                        label="确认密码"
                        fieldProps={{
                            size: 'large',
                            prefix: <LockOutlined className={'prefixIcon'}/>,
                        }}
                        placeholder={'Confirm Password'}
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: '请确认密码！',
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('两次输入的密码不一致!'));
                                },
                            }),
                        ]}
                    />
                </StepsForm.StepForm>
            </StepsForm>
        </Modal>
    );
};
