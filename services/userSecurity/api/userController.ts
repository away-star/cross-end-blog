// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {API_USERSECURITY_PREFIX} from '@/constants';

/** 此处后端没有提供注释 GET /user/initial */
export async function getUserinfo(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: UserSecurityAPI.getUserinfoParams,
    options?: { [key: string]: any },
) {
    return request<UserSecurityAPI.ResultUserInfoDto>(`${API_USERSECURITY_PREFIX}/user/initial`, {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 此处后端没有提供注释 GET /user/test */
export async function test(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: UserSecurityAPI.testParams,
    options?: { [key: string]: any },
) {
    return request<UserSecurityAPI.ResultString>(`${API_USERSECURITY_PREFIX}/user/test`, {
        method: 'GET',
        params: {
            ...params,
            request: undefined,
            ...params['request'],
        },
        ...(options || {}),
    });
}

/** 此处后端没有提供注释 PUT /user/updateInfo */
export async function updateInfo(
    body: UserSecurityAPI.UserinfoRequest,
    options?: { [key: string]: any },
) {
    return request<UserSecurityAPI.ResultString>(`${API_USERSECURITY_PREFIX}/user/updateInfo`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

/** 此处后端没有提供注释 PUT /user/updateSetting */
export async function updateBlogSetting(
    body: UserSecurityAPI.BlogSettingRequest,
    options?: { [key: string]: any },
) {
    return request<UserSecurityAPI.ResultString>(`${API_USERSECURITY_PREFIX}/user/updateSetting`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

/** 此处后端没有提供注释 GET /user/users */
export async function getUsersList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: UserSecurityAPI.getUsersListParams,
    options?: { [key: string]: any },
) {
    return request<UserSecurityAPI.ResultPageUserInfoDto>(`${API_USERSECURITY_PREFIX}/user/users`, {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}
