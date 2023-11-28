// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import {API_CONTENT_PREFIX, API_SOCIAL_PREFIX} from "@/constants";

/** 此处后端没有提供注释 POST /messageChat/action */
export async function chatAction(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: SocialAPI.chatActionParams,
  options?: { [key: string]: any },
) {
  return request<SocialAPI.ResultNull>(`${API_SOCIAL_PREFIX}/messageChat/action`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /messageChat/delete/${param0} */
export async function removeChatMessage1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: SocialAPI.removeChatMessage1Params,
  options?: { [key: string]: any },
) {
  const { messageChatId: param0, ...queryParams } = params;
  return request<SocialAPI.ResultNull>(`${API_SOCIAL_PREFIX}/messageChat/delete/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /messageChat/messageList */
export async function chatMessagePage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: SocialAPI.chatMessagePageParams,
  options?: { [key: string]: any },
) {
  return request<SocialAPI.ResultListMessageChat>(`${API_SOCIAL_PREFIX}/messageChat/messageList`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
