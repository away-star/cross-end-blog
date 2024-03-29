/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
    dev: {
        // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
        '/api/': {
            // 要代理的地址
            target: 'https://5t1v753196.yicp.fun',
            // 配置了这个可以从 http 代理到 https
            // 依赖 origin 的功能可能需要这个，比如 cookie
            changeOrigin: true,
            pathRewrite: {'/api': ''},
        },

        //文件上传请求不走网关，减少网关转发压力
        '/source/': {
            // 要代理的地址
            target: 'http://localhost:9200',
            // 配置了这个可以从 http 代理到 https
            // 依赖 origin 的功能可能需要这个，比如 cookie
            changeOrigin: true,
        },

    },
    test: {
        '/api/': {
            target: 'https://5t1v753196.yicp.fun',
            changeOrigin: true,
            pathRewrite: {'/api': ''},
        },
    },
    pre: {
        '/api/': {
            target: 'https://e19d-113-55-110-218.ngrok-free.app',
            changeOrigin: true,
            pathRewrite: {'/api': ''},
        },
    },
};
