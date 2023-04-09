declare namespace CheckAPI {
    //注册请求体
    interface registerData {
        email: string;
        captcha: string;
        password: string;
    }

    interface loginData {
        //设置autoLogin默认值为true
        email: string;
        captcha?: string;
        password?: string;
        authType: 'captcha' | 'password';
    }

    interface recoverData {
        email: string;
        captcha: string;
        password: string;
    }
}
