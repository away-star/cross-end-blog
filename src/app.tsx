// 运行时配置
import './global.less'
import type {RequestConfig} from 'umi';
import {history} from "umi";
import {localStorageUserSecurityKey} from "@/constants";
import {message} from "antd";
import {useModel} from "@@/exports";
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
    return {name: 'cross-end blog'};
}


//设置拦截器
export const request: RequestConfig = {


    timeout: 10000,

    errorConfig: {
        // 错误接收及处理
        errorHandler: (error: any, opts: any) => {
            console.log(error, opts)
            if (error.response.status === 401) {
                localStorage.removeItem(localStorageUserSecurityKey);
                console.log('请求返回401，跳转到登录页');
            }
        }
    },
    requestInterceptors: [
        (url, options) => {
            const Authorization = localStorage.getItem('Authorization');
            console.log("请求拦截器" + url, "Authorization" + Authorization)
            return {
                url: url,
                options: {
                    ...options,
                    interceptors: true,
                    headers: {
                        'Authorization': `${Authorization}`,
                        'Content-Type': 'application/json',
                    },
                },
            };
        },
    ],
    responseInterceptors: [
        (response) => {
            console.log('响应拦截器：', response);
            // if (response.status !== 200) {
            //     console.log("http响应状态码不对！！！");
            //     message.error("http响应状态码不对！！！").then(r => {
            //         console.log(r)
            //     });
            // }
            // const data: any = response.data;
            // if (data.code === -10006 || data.code === -10005) {
            //     message.error(data.msg, 1.5).then(r => {
            //         history.push('/checkin');
            //     })
            // }
            // if (data.code === -10002) {
            //     message.error(data.msg, 1.5).then(r => {
            //         history.push('/checkin');
            //     })
            // }
            // if (data.code === -10003 || data.code === -10001) {
            //     message.error("非法操作,请重新登录", 1.5).then(r => {
            //         history.push('/checkin');
            //     })
            // }
            return response;
        },
    ]
}
