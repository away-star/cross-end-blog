// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import {API_MEDIA_PREFIX} from "@/constants";

/** 此处后端没有提供注释 POST /image/upload */
export async function upload(body: {}, options?: { [key: string]: any }) {
  return request<MediaAPI.ResultString>(`${API_MEDIA_PREFIX}/image/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
