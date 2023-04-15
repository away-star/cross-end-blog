import {request} from '@umijs/max';

export async function writeEssay(
    body: API.Essay,
    options?: { [key: string]: any },
) {
    return request('/api/service-content/essay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}


export async function getEssays(
    params: {
        authorId:string;
        step: number;
    },
    options?: { [key: string]: any },
) {
    return request(`/api/service-content/essay/page`, {
        method: 'GET',
        params: {...params},
        ...(options || {}),
    });
}

export async function getPost(
    params: {
        step: number;
        authorId:string
    },
    options?: { [key: string]: any },
) {
    return request(`/api/service-content/post/page`, {
        method: 'GET',
        params: {...params},
        ...(options || {}),
    });
}

export async function getTest(
) {
    const Authorization = localStorage.getItem('Authorization');
    return request(`/api/service-content/information/777`, {
       // 从本地存储中获取 token

        method: 'GET',

    });
}

export async function getPostDetail(
    id: string,
    options?: { [key: string]: any },
) {
    return request(`/api/service-content/post/${id}`, {
        method: 'GET',
        ...(options || {}),
    });
}


export async function getInitialArgs(
    params: {
        loginInformationId: string|null;
    },
    options?: { [key: string]: any },
) {
    return request(`/api/service-user/information/initial`, {
        method: 'GET',
        params: {...params},
        ...(options || {}),
    });
}


export interface initialData{
    userInfo: UserInfoAPI.userInfoData|undefined;
    personage:{
        email:string
        loginInformationId:string
        proverbs:string[]
    }|undefined;
}
