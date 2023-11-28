// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import {API_CONTENT_PREFIX, API_SOCIAL_PREFIX} from "@/constants";

/** 此处后端没有提供注释 POST /messageLeave/action */
export async function messageLeaveAction(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: SocialAPI.messageLeaveActionParams,
  options?: { [key: string]: any },
) {
  return request<SocialAPI.ResultNull>(`${API_SOCIAL_PREFIX}/messageLeave/action`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /messageLeave/delete/${param0} */
export async function removeChatMessage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: SocialAPI.removeChatMessageParams,
  options?: { [key: string]: any },
) {
  const { messageChatId: param0, ...queryParams } = params;
  return request<SocialAPI.ResultNull>(`${API_SOCIAL_PREFIX}/messageLeave/delete/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /messageLeave/messageList */
export async function leaveMessagePage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: SocialAPI.leaveMessagePageParams,
  options?: { [key: string]: any },
) {
  return request<SocialAPI.ResultListMessageLeave>(
    `${API_SOCIAL_PREFIX}/messageLeave/messageList`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /messageLeave/response */
export async function responseEdit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: SocialAPI.responseEditParams,
  options?: { [key: string]: any },
) {
  return request<SocialAPI.ResultNull>(`${API_SOCIAL_PREFIX}/messageLeave/response`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
