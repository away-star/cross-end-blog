import {request} from '@umijs/max';
import {CLIENT_ID, CLIENT_SECRET, GRANT_TYPE} from "@/constants";

export async function getLoginCaptcha(
    params: {
        email: string;
    },
    options?: { [key: string]: any },
) {
    return request(`/api/service-user/user/mail/login/captcha`, {
        method: 'GET',
        params: {...params},
        ...(options || {}),
    });
}


export async function getRegisterCaptcha(
    params: {
        email: string;
    },
    options?: { [key: string]: any },
) {
    return request(`/api/service-user/user/mail/register/captcha`, {
        method: 'GET',
        params: {...params},
        ...(options || {}),
    });
}

export async function getRecoverCaptcha(
    params: {
        email: string;
    },
    options?: { [key: string]: any },
) {
    console.log(params)
    return request(`/api/service-user/user/mail/recover/captcha`, {
        method: 'GET',
        params: {...params},
        ...(options || {}),
    });
}

export async function register(
    body: CheckAPI.registerData,
    options?: { [key: string]: any },
) {
    return request('/api/service-user/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}


export async function login(
    params: {
        username: CheckAPI.loginData;
    },
    options?: { [key: string]: any },
) {
    let username = JSON.stringify(params.username)
    return request(`/api/service-user/oauth/token`, {
        method: 'POST',
        params: {
            username: username,
            client_id:CLIENT_ID,
            client_secret:CLIENT_SECRET,
            grant_type:GRANT_TYPE,
        },
        ...(options || {}),
    });
}

export async function recover(
    body: CheckAPI.recoverData,
    options?: { [key: string]: any },
) {
    return request(`/api//service-user/user/recover`, {
        method: 'PUT',
        data: body,
        ...(options || {}),
    });
}
