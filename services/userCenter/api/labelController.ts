// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import {API_USERCENTER_PREFIX} from "@/constants";
/** 此处后端没有提供注释 PUT /label */
export async function updateLabel(
  body: UserCenterAPI.LabelRequest,
  options?: { [key: string]: any },
) {
  return request<UserCenterAPI.ResultString>(`${API_USERCENTER_PREFIX}/label`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /label/${param0} */
export async function deleteLabel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserCenterAPI.deleteLabelParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<UserCenterAPI.ResultString>(`${API_USERCENTER_PREFIX}/label/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /label/add */
export async function putLabel(body: UserCenterAPI.LabelRequest, options?: { [key: string]: any }) {
  return request<UserCenterAPI.ResultString>(`${API_USERCENTER_PREFIX}/label/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /label/all */
export async function getAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserCenterAPI.getAllParams,
  options?: { [key: string]: any },
) {
  return request<UserCenterAPI.ResultListLabel>(`${API_USERCENTER_PREFIX}/label/all`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
