// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import { API_CONTENT_PREFIX } from '@/constants';

/** 此处后端没有提供注释 PUT /comment */
export async function updateComment(
  body: ContentAPI.CommentRequest,
  options?: { [key: string]: any },
) {
  return request<ContentAPI.ResultString>(`${API_CONTENT_PREFIX}/comment`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /comment */
export async function comment(body: ContentAPI.CommentRequest, options?: { [key: string]: any }) {
  return request<ContentAPI.ResultString>(`${API_CONTENT_PREFIX}/comment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /comment/${param0} */
export async function deleteComment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: ContentAPI.deleteCommentParams,
  options?: { [key: string]: any },
) {
  const { commentId: param0, ...queryParams } = params;
  return request<ContentAPI.ResultString>(`${API_CONTENT_PREFIX}/comment/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /comment/page */
export async function commentPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: ContentAPI.commentPageParams,
  options?: { [key: string]: any },
) {
  return request<ContentAPI.ResultPageCommentVo>(`${API_CONTENT_PREFIX}/comment/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
