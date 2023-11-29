// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import { API_CONTENT_PREFIX } from '@/constants';

/** 此处后端没有提供注释 POST /favorite/action/${param0} */
export async function action(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: ContentAPI.actionParams,
  options?: { [key: string]: any },
) {
  const { targetId: param0, ...queryParams } = params;
  return request<ContentAPI.ResultNull>(`${API_CONTENT_PREFIX}/favorite/action/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /favorite/action/${param0} */
export async function deleteAction(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: ContentAPI.deleteActionParams,
  options?: { [key: string]: any },
) {
  const { targetId: param0, ...queryParams } = params;
  return request<ContentAPI.ResultNull>(`${API_CONTENT_PREFIX}/favorite/action/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
