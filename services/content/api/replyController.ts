// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import {API_CONTENT_PREFIX} from "@/constants";


/** 此处后端没有提供注释 PUT /reply */
export async function updateReply(body: ContentAPI.ReplyRequest, options?: { [key: string]: any }) {
  return request<ContentAPI.ResultString>(`${API_CONTENT_PREFIX}/reply`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /reply */
export async function replyAction(body: ContentAPI.ReplyRequest, options?: { [key: string]: any }) {
  return request<ContentAPI.ResultString>(`${API_CONTENT_PREFIX}/reply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /reply/${param0} */
export async function deleteReply(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: ContentAPI.deleteReplyParams,
  options?: { [key: string]: any },
) {
  const { replyId: param0, ...queryParams } = params;
  return request<ContentAPI.ResultString>(`${API_CONTENT_PREFIX}/reply/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
