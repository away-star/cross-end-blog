// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import { API_USERSECURITY_PREFIX } from '@/constants';

/** 此处后端没有提供注释 POST /userSecurity/login */
export async function login(
  body: UserSecurityAPI.LoginInfoRequest,
  options?: { [key: string]: any },
) {
  return request<UserSecurityAPI.ResultLoginVo>(`${API_USERSECURITY_PREFIX}/userSecurity/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /userSecurity/mail/login/captcha */
export async function codeSendForLogin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserSecurityAPI.codeSendForLoginParams,
  options?: { [key: string]: any },
) {
  return request<UserSecurityAPI.ResultObject>(
    `${API_USERSECURITY_PREFIX}/userSecurity/mail/login/captcha`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 GET /userSecurity/mail/recover/captcha */
export async function codeSendForRecover(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserSecurityAPI.codeSendForRecoverParams,
  options?: { [key: string]: any },
) {
  return request<UserSecurityAPI.ResultObject>(
    `${API_USERSECURITY_PREFIX}/userSecurity/mail/recover/captcha`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 GET /userSecurity/mail/register/captcha */
export async function codeSendForRegister(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserSecurityAPI.codeSendForRegisterParams,
  options?: { [key: string]: any },
) {
  return request<UserSecurityAPI.ResultObject>(
    `${API_USERSECURITY_PREFIX}/userSecurity/mail/register/captcha`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 PUT /userSecurity/recover */
export async function recover(
  body: UserSecurityAPI.RecoverRequest,
  options?: { [key: string]: any },
) {
  return request<UserSecurityAPI.ResultString>(`${API_USERSECURITY_PREFIX}/userSecurity/recover`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userSecurity/register */
export async function register(
  body: UserSecurityAPI.RegisterInfoRequest,
  options?: { [key: string]: any },
) {
  return request<UserSecurityAPI.ResultNull>(`${API_USERSECURITY_PREFIX}/userSecurity/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
