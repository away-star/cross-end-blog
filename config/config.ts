import {defineConfig} from "@umijs/max";
import proxy from "./proxy";
import routes from "./routes";

export default defineConfig({


    // webpack配置
    chainWebpack(config){
        config.module
            .rule('otf')
            .test(/.otf$/)
            .use('file-loader')
            .loader('file-loader');
    },

    //哈希后缀，使用browser模式，用于 增量发布和避免浏览器加载缓存
    hash: false,
    //打包输出目录
    outputPath: "dist",
    //标题
    title: "cross-end blog",
    history: {
        type: "browser",
    },

    //最低浏览器兼容
    targets: {
        ie: 11,
    },

    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},

    //antd主题配置
    theme: {
        "@primary-color": "#789ACFFF",
    },

    //取消自带的layouts配置
   // layout: true,
    favicons: ['https://staraway.love/%E4%B8%BB%E9%A1%B5.svg'],
    //代理配置
    proxy: proxy["dev"],
    //路由配置
    routes,
    //包管理
    npmClient: "yarn",
    dva: {},
});
