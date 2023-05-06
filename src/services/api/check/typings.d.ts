declare namespace CheckAPI {
    //注册请求体
    interface registerData {
        email: string;
        captcha: string;
        password: string;
        registerType: 'email' | 'phone';
    }

    interface loginData {
        //设置autoLogin默认值为true
        email: string;
        captcha?: string;
        password?: string;
        authType: 'email' | 'password';
    }

    interface recoverData {
        email: string;
        captcha: string;
        password: string;
    }
}
