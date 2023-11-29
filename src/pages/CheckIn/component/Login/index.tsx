import {
    GithubOutlined,
    LockOutlined, MailOutlined,
    QqOutlined,
    WechatOutlined,
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
import {history} from "umi";
import {useModel} from "@@/exports";
import {codeSendForLogin, login} from "../../../../../services/userSecurity/api/userSecurityController";
import {AUTH_EMAIL_TYPE, AUTH_PASSWORD_TYPE, AuthorizationToken, localStorageUserSecurityKey} from "@/constants";


type LoginType = 'email' | 'password';

const iconStyles: CSSProperties = {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '25px',
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
    cursor: 'pointer',
}

const actionStyles: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}


export default () => {
    const [loginType, setLoginType] = useState<LoginType>(AUTH_PASSWORD_TYPE);
    const {setIsCoverModalOpen} = useModel('checkModel', (model) => ({
        setIsCoverModalOpen: model.setIsCoverModalOpen,
    }));

    //登录方法
    const goLogin = async (values: any) => {
        const res = await login({
            account: values.email ?? undefined,
            authType: loginType,
            captcha: values.captcha ?? undefined,
            phone: values.phone ?? undefined,
            email: values.email ?? undefined,
            password: values.password ?? undefined
        });
        if (res.code === 200) {
            let securityInfoId = res.data!.securityInfo!.id!;
            localStorage.setItem(localStorageUserSecurityKey, securityInfoId.toString());
            localStorage.setItem(AuthorizationToken, res.data!.token!);
            history.push(`/blog/${securityInfoId}/home`)
            message.success('登录成功');
        } else {
            message.error(res.msg);
        }
    }


    const [form] = Form.useForm();
    const email = Form.useWatch('email', form);

    const getCaptcha = async () => {
        (email)
        const res = await codeSendForLogin({email});
        if (res.code === 200) {
            message.success('验证码已发送');
        } else {
            message.error(res.msg);
        }
    }

    const items = [
        {label: "密码登录", key: AUTH_PASSWORD_TYPE,},
        {label: "验证码登录", key: AUTH_EMAIL_TYPE,},
    ];

    return (
        <ProConfigProvider hashed={false}>
            <div style={{backgroundColor: "transparent"}}>
                <LoginForm
                    form={form}
                    onFinish={goLogin}
                    logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                    title="cross-end blog"
                    subTitle="跨端个人博客"
                    actions={
                        <div
                            style={actionStyles}
                        >
                            <Divider plain>
              <span style={{color: '#023131', fontWeight: 'normal', fontSize: 14}}>
                第三方登录
              </span>
                            </Divider>
                            <Space align="center" size={24}>
                                <div
                                    style={actionIconStyles}
                                >
                                    <QqOutlined style={{...iconStyles, color: '#1677FF'}}/>
                                </div>
                                <div
                                    style={actionIconStyles}
                                >
                                    <WechatOutlined style={{...iconStyles, color: '#FF6A10'}}/>
                                </div>
                                <div
                                    style={actionIconStyles}
                                >
                                    <GithubOutlined style={{...iconStyles, color: '#333333'}}/>
                                </div>
                            </Space>
                        </div>
                    }
                >
                    <Tabs
                        centered
                        activeKey={loginType}
                        onChange={(activeKey) => setLoginType(activeKey as LoginType)}
                        items={items}
                    >
                    </Tabs>
                    {loginType === AUTH_PASSWORD_TYPE && (
                        <>
                            <ProFormText
                                name="email"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <MailOutlined className={'prefixIcon'}/>,
                                }}
                                placeholder={'email'}
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入邮箱!',
                                    },
                                    {
                                        pattern: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
                                        message: '邮箱格式错误!',
                                    }
                                ]}
                            />
                            <ProFormText.Password
                                name="password"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className={'prefixIcon'}/>,
                                }}
                                placeholder={'password'}
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入密码！',
                                    },
                                ]}
                            />
                        </>
                    )}
                    {loginType === AUTH_EMAIL_TYPE && (
                        <>
                            <ProFormText
                                name="email"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <MailOutlined className={'prefixIcon'}/>,
                                }}
                                placeholder={'email'}
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入邮箱!',
                                    },
                                    {
                                        pattern: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
                                        message: '邮箱格式错误!',
                                    }
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
                        </>
                    )}
                    <div
                        style={{
                            //marginBlockEnd: 24,
                        }}
                    >
                        <a onClick={() => setIsCoverModalOpen(true)}
                           style={{
                               float: 'right',
                               marginBottom: 12,
                           }}
                        >
                            忘记密码
                        </a>
                    </div>
                </LoginForm>
            </div>
        </ProConfigProvider>
    );
};
