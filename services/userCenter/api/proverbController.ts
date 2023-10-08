// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import {API_USERCENTER_PREFIX} from "@/constants";
/** 此处后端没有提供注释 PUT /Proverb */
export async function updateProverb(
  body: UserCenterAPI.ProverbRequest,
  options?: { [key: string]: any },
) {
  return request<UserCenterAPI.ResultString>(`${API_USERCENTER_PREFIX}/Proverb`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /Proverb/${param0} */
export async function deleteProverb(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserCenterAPI.deleteProverbParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<UserCenterAPI.ResultString>(`${API_USERCENTER_PREFIX}/Proverb/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /Proverb/add */
export async function putProverb(
  body: UserCenterAPI.ProverbRequest,
  options?: { [key: string]: any },
) {
  return request<UserCenterAPI.ResultString>(`${API_USERCENTER_PREFIX}/Proverb/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /Proverb/all */
export async function getAll1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserCenterAPI.getAll1Params,
  options?: { [key: string]: any },
) {
  return request<UserCenterAPI.ResultListProverb>(`${API_USERCENTER_PREFIX}/Proverb/all`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
