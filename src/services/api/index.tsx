import {request} from "@@/exports";

export async function writeEssay(
    body: API.Essay,
    options?: { [key: string]: any },
) {
    return request<API.Result_UserInfo_>('/api/service-content/essay', {
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
        step: number;
    },
    options?: { [key: string]: any },
) {
    return request(`/api/service-content/essay/page`, {
        method: 'GET',
        params: { ...params },
        ...(options || {}),
    });
}

export async function getPost(
    params: {
        step: number;
    },
    options?: { [key: string]: any },
) {
    return request(`/api/service-content/post/page`, {
        method: 'GET',
        params: { ...params },
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

