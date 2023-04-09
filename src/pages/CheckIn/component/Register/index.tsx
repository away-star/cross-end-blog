import {
    AlipayCircleOutlined, GithubOutlined,
    LockOutlined, MailOutlined,
    MobileOutlined, QqOutlined,
    TaobaoCircleOutlined,
    UserOutlined, WechatOutlined,
} from '@ant-design/icons';
import {
    LoginForm,
    ProFormCaptcha,
    ProFormText,
    ProConfigProvider,
} from '@ant-design/pro-components';
import {Divider, Form, message, Space, Tabs} from 'antd';
import type {CSSProperties} from 'react';
import {useState} from 'react';
import {getLoginCaptcha, getRecoverCaptcha, getRegisterCaptcha, login, register} from "@/services/api/check";
import {history} from "umi";
import {TOKEN_PREFIX} from "@/constants";
import {onLogin} from "@/pages/CheckIn";

type LoginType = 'captcha' | 'password';

const iconStyles: CSSProperties = {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    verticalAlign: 'middle',
    cursor: 'pointer',
};


const actionIconStyles: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 40,
    width: 40,
    border: '1px solid #D4D8DD',
    borderRadius: '50%',
}

const actionStyles: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}

//登录方法
const goRegister = async (values: any) => {
    const registerData: CheckAPI.registerData = {
        captcha: values.captcha,
        email: values.email,
        password: values.password
    }
    // console.log(username)
    const res = await register(registerData);
    console.log(res)
    console.log(res)
    if (res.code === 200) {
        message.success('注册成功,欢迎加入cross-end blog大家庭');
        onLogin()
    } else {
        message.error(res.message);
    }


}


export default () => {

    const [form] = Form.useForm();
    const email = Form.useWatch('email', form);

    const getCaptcha = async () => {
        const res = await getRegisterCaptcha({email});
        // console.log(email)
        // const res = await login({username: {email}});
        if (res.code === 200) {
            message.success('验证码已发送');
        } else {
            message.error(res.message);
        }
    }

    return (
        <ProConfigProvider hashed={false}>
            <div style={{backgroundColor: 'transparent'}}>
                <LoginForm
                    form={form}
                    onFinish={goRegister}
                    logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                    title="cross-end blog"
                    subTitle="跨端个人博客"
                    submitter={{
                        searchConfig: {
                            submitText: '注册',
                        },
                    }}
                    actions={
                        <div style={actionStyles}>
                            <Divider plain>
                        <span style={{color: '#CCC', fontWeight: 'normal', fontSize: 14}}>
                            其他注册方式
                        </span>
                            </Divider>
                            <Space align="center" size={24}>
                                <div style={actionIconStyles}>
                                    <QqOutlined style={{...iconStyles, color: '#1677FF'}}/>
                                </div>
                                <div style={actionIconStyles}>
                                    <WechatOutlined style={{...iconStyles, color: '#FF6A10'}}/>
                                </div>
                                <div style={actionIconStyles}>
                                    <GithubOutlined style={{...iconStyles, color: '#333333'}}/>
                                </div>
                            </Space>
                        </div>
                    }>
                    <ProFormText
                        name="email"
                        fieldProps={{
                            size: 'large',
                            prefix: <MailOutlined className={'prefixIcon'}/>,
                        }}
                        placeholder={'Email'}
                        rules={[
                            {
                                required: true,
                                message: '请输入邮箱!',
                            },
                            {
                                pattern: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
                                message: '邮箱格式错误!',
                            },
                        ]}
                    />
                    <ProFormText.Password
                        name="password"
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
                    <ProFormCaptcha
                        fieldProps={{
                            size: 'large',
                            prefix: <LockOutlined className={'prefixIcon'}/>,
                        }}
                        captchaProps={{
                            size: 'large',
                        }}
                        placeholder={'请输入验证码'}
                        captchaTextRender={(timing, count) => {
                            if (timing) {
                                return `${count} ${'获取验证码'}`;
                            }
                            return '获取验证码';
                        }}
                        name="captcha"
                        rules={[
                            {
                                required: true,
                                message: '请输入验证码！',
                            },
                        ]}
                        onGetCaptcha={getCaptcha}
                    />
                </LoginForm>
            </div>
        </ProConfigProvider>
    );
};
