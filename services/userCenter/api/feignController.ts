// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import { API_USERCENTER_PREFIX } from '@/constants';

/** 此处后端没有提供注释 GET /feign/userInfos */
export async function getUserInfos(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserCenterAPI.getUserInfosParams,
  options?: { [key: string]: any },
) {
  return request<UserCenterAPI.ResultListUserinfo>(`${API_USERCENTER_PREFIX}/feign/userInfos`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
