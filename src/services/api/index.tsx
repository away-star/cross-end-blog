import {request} from '@umijs/max';


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
        lastUpdateDate?:string
    },
    options?: { [key: string]: any },
) {
    return request(`/api/service-content/post/page`, {
        method: 'GET',
        params: {...params},
        ...(options || {}),
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
        proverbs:UserInfoAPI.proverb[]
        slideVenue:string[]
        labels:UserInfoAPI.label[]
    }|undefined;
}
