import {request} from "@umijs/max";

export async function updateBlogSetting(
    body: UserInfoAPI.blogSettingData,
    options?: { [key: string]: any },
) {
    return request(`/api/service-user/information/updateBlogSetting`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

export async function updateInfo(
    body: UserInfoAPI.userInfoData,
    options?: { [key: string]: any },
) {
    return request(`/api/service-user/information/updateInfo`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
