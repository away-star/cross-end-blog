## Getting Started

First,download dependency

```bash
yarn
```

Second, run the development server:

```bash
yarn start
```

## 项目介绍

此项目为‘跨六端博客’的web前端，负责大屏、中大屏的web渲染展示，作为小屏端、Android、ios端flutter项目的互补项目，利用了大量的动画、交互、视觉效果，以及一些新的技术，使用户体验更加流畅，更加美观，更加人性化。

## 项目实现

### 技术选型与相关开发文档

- web端渲染框架umi.js
- 开发语言 Typescript
- Git提交规范
    - husky + commitizen
- 代码规范及格式
    - eslint + @antfu/eslint-config
    - Prettier (未格式样式可使用Prettier 插件格式)
- CSS
    - 样式重置 normalize.css
    - CSS 框架 less
- 组件库
    - And Design of React
- 网络请求
    - Axios
    - umi-request
- 其他三方库
    - react-markdown -> markdown解析
    - classnames -> 处理class
    - javascript-time-ago -> 格式化时间
    - less & less-loader & postcss-less -> 处理less
    - lodash-es -> 工具函数库

### 架构设计

1. 规范制定：制定了一套统一的代码规范，并使用eslint等工具，以提高代码质量和协作效率
2. 模块化：为了实现高内聚低耦合的设计原则并且提升协作效率，我们将业务分解为了多个独立的模块
3. 多页面同时需要的组件放入components下的一级文件夹(例如: components/Author, components/banner以及components/common下
   实现复用)
4. 页面组件下的组件放在以以页面为名称的文件夹下保证可扩展性
    1. 使用命名空间导出,确保可读性
5. 布局统一放在 /components/layout下以保证复用性
6. 组件拆分及管理：针对已划分的各个不同模块，我们进一步的对每一个模块进行了拆分，并且将可复用的 UI 元素封装为组件

### 项目代码介绍

```angular2html
blog
├── README.md
├── .husky
├── .editorconfig
├── .eslintrc.json
├── declaration.d.ts
├── package-lock.json
├── package.json
├── public
│   ├── font               # 静态字体资源
├── config                 # umi配置（路由、代理等）
├── src
│   ├── assets               # 静态资源
│   ├── components           # 通用业务组件
│   ├── layout               # 布局
│   ├── pages                # 页面模版
│   ├── services             # 接口
│   ├── models               # redux状态管理
│   └── utils                # 工具库
│   └── constants            # 常量
│   └── wrappers             # 权限校验
└── tsconfig.json
```
