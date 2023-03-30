import {
    AlipayOutlined,
    LockOutlined,
    MobileOutlined,
    TaobaoOutlined,
    UserOutlined,
    WeiboOutlined,
    StarFilled
} from '@ant-design/icons';
import {
    LoginFormPage,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
} from '@ant-design/pro-components';
import {Button, Divider, message, Space, Tabs,Typography } from 'antd';
import type {CSSProperties} from 'react';
import {useState} from 'react';





//CSS样式
const iconStyles: CSSProperties = {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    verticalAlign: 'middle',
    cursor: 'pointer',
};

const loginFormStyle: CSSProperties = {
    backgroundColor: 'white',
    height: 'calc(100vh - 48px)',
    margin: -24
};

const buttonOfActivityConfigStyle: CSSProperties = {
    borderRadius: 20,
    background: '#fff',
    color: '#1677FF',
    width: 200,
};

const actionsStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
};
const outlineStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 40,
    width: 40,
    border: '1px solid #D4D8DD',
    borderRadius: '50%',
};
//CSS样式

const { Link } = Typography;
type LoginType = 'phone' | 'account';

export default () => {
    const [loginType, setLoginType] = useState<LoginType>('phone');
    return (
        <div style={loginFormStyle}>
            <LoginFormPage
                backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
                logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                title="Star Blog"
                subTitle="费尽心机开发的博客系统"
                activityConfig={{
                    action: (
                        <Button
                            size="large"
                            style={buttonOfActivityConfigStyle}
                        >
                            <Link href="https://ant.design" target="_blank" style={{display: 'flex'}}>
                                <StarFilled spin style={{fontSize:33, color:'#1890ff',marginBottom:'16px'}}/>
                                点我前往博客主页
                            </Link>
                        </Button>
                    ),
                }}
                actions={
                    <div
                        style={actionsStyle}
                    >
                        <Divider plain>
              <span style={{color: '#CCC', fontWeight: 'normal', fontSize: 14}}>
                其他登录方式
              </span>
                        </Divider>
                        <Space align="center" size={24}>
                            <div style={outlineStyle}>
                                <AlipayOutlined style={{...iconStyles, color: '#1677FF'}}/>
                            </div>
                            <div style={outlineStyle}>
                                <TaobaoOutlined style={{...iconStyles, color: '#FF6A10'}}/>
                            </div>
                            <div style={outlineStyle}>
                                <WeiboOutlined style={{...iconStyles, color: '#333333'}}/>
                            </div>
                        </Space>
                    </div>
                }
            >
                <Tabs
                    centered
                    activeKey={loginType}
                    onChange={(activeKey) => setLoginType(activeKey as LoginType)}
                >
                    <Tabs.TabPane key={'account'} tab={'账号密码登录'}/>
                    <Tabs.TabPane key={'phone'} tab={'手机号登录'}/>
                </Tabs>
                {loginType === 'account' && (
                    <>
                        <ProFormText
                            name="username"
                            fieldProps={{
                                size: 'large',
                                prefix: <UserOutlined className={'prefixIcon'}/>,
                            }}
                            placeholder={'用户名: admin or user'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        />
                        <ProFormText.Password
                            name="password"
                            fieldProps={{
                                size: 'large',
                                prefix: <LockOutlined className={'prefixIcon'}/>,
                            }}
                            placeholder={'密码: ant.design'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码！',
                                },
                            ]}
                        />
                    </>
                )}
                {loginType === 'phone' && (
                    <>
                        <ProFormText
                            fieldProps={{
                                size: 'large',
                                prefix: <MobileOutlined className={'prefixIcon'}/>,
                            }}
                            name="mobile"
                            placeholder={'手机号'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入手机号！',
                                },
                                {
                                    pattern: /^1\d{10}$/,
                                    message: '手机号格式错误！',
                                },
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
                            onGetCaptcha={async () => {
                                message.success('获取验证码成功！验证码为：1234');
                            }}
                        />
                    </>
                )}
                <div
                    style={{
                        marginBlockEnd: 24,
                    }}
                >
                    <ProFormCheckbox noStyle name="autoLogin">
                        自动登录
                    </ProFormCheckbox>
                    <a
                        style={{
                            float: 'right',
                        }}
                    >
                        忘记密码
                    </a>
                </div>
            </LoginFormPage>
        </div>
    );
};
