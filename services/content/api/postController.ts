// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import {API_CONTENT_PREFIX, API_SOCIAL_PREFIX} from "@/constants";

/** 此处后端没有提供注释 PUT /post */
export async function updatePost(body: ContentAPI.PostRequest, options?: { [key: string]: any }) {
  return request<ContentAPI.ResultString>(`${API_CONTENT_PREFIX}/post`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /post */
export async function savePost(body: ContentAPI.PostRequest, options?: { [key: string]: any }) {
  return request<ContentAPI.ResultString>(`${API_CONTENT_PREFIX}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /post/${param0} */
export async function postDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: ContentAPI.postDetailParams,
  options?: { [key: string]: any },
) {
  const { postId: param0, ...queryParams } = params;
  return request<ContentAPI.ResultPostDetailVo>(`${API_CONTENT_PREFIX}/post/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /post/${param0} */
export async function deletePost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: ContentAPI.deletePostParams,
  options?: { [key: string]: any },
) {
  const { postId: param0, ...queryParams } = params;
  return request<ContentAPI.ResultString>(`${API_CONTENT_PREFIX}/post/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /post/page */
export async function postPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: ContentAPI.postPageParams,
  options?: { [key: string]: any },
) {
  return request<ContentAPI.ResultPagePostSimpleVo>(`${API_CONTENT_PREFIX}/post/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /post/test */
export async function test(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: ContentAPI.testParams,
  options?: { [key: string]: any },
) {
  return request<ContentAPI.ResultString>(`${API_CONTENT_PREFIX}/post/test`, {
    method: 'GET',
    params: {
      ...params,
      request: undefined,
      ...params['request'],
    },
    ...(options || {}),
  });
}
