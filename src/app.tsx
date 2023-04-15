// 运行时配置
import './global.less'
import type {RequestConfig} from 'umi';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
    return {name: 'cross-end blog'};
}

/*export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    MyMenu: {
      locale: false,
    },
  };
};*/

//设置拦截器
export const request: RequestConfig = {
    timeout: 10000,

    errorConfig: {
        // 错误接收及处理
        errorHandler: (error: any, opts: any) => {
            console.log(error, opts)
            if (error.response.status === 401) {
                localStorage.removeItem('Authorization');
                console.log('请求返回401，跳转到登录页');
            }
        }
    },
    requestInterceptors: [
        (url, options) => {
            console.log("请求拦截器" + url)
            const Authorization = localStorage.getItem('Authorization');
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
            console.log('请求响应：', response);
            return response;
        },
    ]
}
