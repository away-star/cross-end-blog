// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import { API_CONTENT_PREFIX } from '@/constants';

/** 此处后端没有提供注释 PUT /essay */
export async function updateEssay(body: ContentAPI.EssayRequest, options?: { [key: string]: any }) {
  return request<ContentAPI.ResultNull>(`${API_CONTENT_PREFIX}/essay`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /essay */
export async function saveEssay(body: ContentAPI.EssayRequest, options?: { [key: string]: any }) {
  return request<ContentAPI.ResultString>(`${API_CONTENT_PREFIX}/essay`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /essay/${param0} */
export async function deleteEssay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: ContentAPI.deleteEssayParams,
  options?: { [key: string]: any },
) {
  const { essayId: param0, ...queryParams } = params;
  return request<ContentAPI.ResultString>(`${API_CONTENT_PREFIX}/essay/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /essay/page */
export async function essayPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: ContentAPI.essayPageParams,
  options?: { [key: string]: any },
) {
  return request<ContentAPI.ResultPageEssayVo>(`${API_CONTENT_PREFIX}/essay/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
