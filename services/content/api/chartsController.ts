// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import { API_CONTENT_PREFIX } from '@/constants';

/** 此处后端没有提供注释 GET /charts/data */
export async function getChartData(options?: { [key: string]: any }) {
  return request<ContentAPI.ResultChartsDataVo>(`${API_CONTENT_PREFIX}/charts/data`, {
    method: 'GET',
    ...(options || {}),
  });
}
