



export const CLIENT_ID = 'cross-end';
export const CLIENT_SECRET = 'cross-end';

/**
 * 资源port
 */

export const sourceTarget = 'http://127.0.0.1:9209/';



/**
 * 本地存储key
 */
export const localStorageUserSecurityKey= 'user_security_id';
export const AuthorizationToken= 'Authorization';

/**
 * 认证方式
 */
export const AUTH_PASSWORD_TYPE = 'password';
export const AUTH_EMAIL_TYPE = 'email';
export const AUTH_PHONE_TYPE = 'phone';
export const GRANT_TYPE = 'phone';


/**
 * 代理路径
 */
export const API_USERSECURITY_PREFIX = '/api/userSecurity';
export const API_USERCENTER_PREFIX = '/api/userCenter';
export const API_MEDIA_PREFIX = '/source/media';
export const API_CONTENT_PREFIX = '/api/content';
export const API_SOCIAL_PREFIX = '/api/social';


/**
 * 默认参数
 */
export const DEFAULT_NICKNAME = 'xingxing';
export const DEFAULT_AVATAR = 'https://avatars.githubusercontent.com/u/106024593?v=4';
export const DEFAULT_PROVERB = 'What does not kill me makes me stronger.';
export const DEFAULT_GITHUB_ADDR = 'https://github.com/away-star';
export const DEFAULT_JUEJIN_ADDR = 'https://juejin.cn/user/207157472794621';
export const DEFAULT_CSDN_ADDR = 'https://blog.csdn.net/qq_67602816';
export const DEFAULT_SLIDE = 'https://blog.csdn.net/qq_67602816';
export const DEFAULT_IDIOGRAPH = '越努力越幸运';
export const AUTHOR_QQ = '984494524';
export const AUTHOR_EMAIL = 'email:2064989403@qq.com';
export const DEFAULT_SLOGAN = '如果觉得内容不错，欢迎分享给其他人哦';
export const DEFAULT_WelcomeText = '欢迎光临我的博客';
export const DEFAULT_Slide = '欢迎光临我的博客';


/**
 * mock
 */
export const MOCK = "# 场景复现：\n" +
    "`react多组件间通讯`\n" +
    "\n" +
    "   *在做文章编辑发布的时候，文章各内容均分布于不同的组件，甚至存在于不同的页面，还存在组件销毁问题，想在点击发布的时候拿到其他组件的内容是比较麻烦的*\n" +
    "![在这里插入图片描述](https://img-blog.csdnimg.cn/46bfc0af94534a3b902b69bf93313ca3.png)\n" +
    "\n" +
    "---\n" +
    "\n" +
    "# 我最初的解决方案\n" +
    "`采用dva简易数据流model对全局数据进行管理`\n" +
    "\n" +
    " 1. 设立全局model\n" +
    "```javascript\n" +
    "export default {\n" +
    "    namespace: 'write',\n" +
    "\n" +
    "    state: {\n" +
    "        content: '',\n" +
    "        title: '',\n" +
    "        category: '',\n" +
    "        description:'',\n" +
    "        isPublic:false,\n" +
    "        coverUrl:''\n" +
    "    },\n" +
    "```\n" +
    "\n" +
    " 2. 各组件内同步model状态\n" +
    " \n" +
    "\n" +
    "```typescript\n" +
    "if (response.code === 200) {\n" +
    "                dispatch({\n" +
    "                    type: \"write/setPostByHand\",\n" +
    "                    payload: {\n" +
    "                        coverUrl: response.message\n" +
    "                    }\n" +
    "                });\n" +
    "```\n" +
    "\n" +
    " 3. 最终消费成功后重置全局model\n" +
    " \n" +
    "\n" +
    "```r\n" +
    "if (response.code===200){\n" +
    "                    message.success(\"发表成功\")\n" +
    "                    //清除全局model\n" +
    "                    dispatch({\n" +
    "                        type: \"write/cleanPostByHand\",\n" +
    "                    })\n" +
    "                    history.push(`home`)\n" +
    "                }else{\n" +
    "                    message.error(\"系统错误，请联系小星\")\n" +
    "                }\n" +
    "```\n" +
    "\n" +
    "---\n" +
    "\n" +
    "# 后续思路及改进措施：\n" +
    "\n" +
    "> 虽然这种方式成功实现了需求，但是在浏览器刷新的时候还是会造成数据丢失\n" +
    "> \n" +
    "所以昨晚睡觉的时候我想到是否可以用localstorage存储，这样就不存在数据丢失的问题了（天哪我为什么没有早想到![在这里插入图片描述](https://img-blog.csdnimg.cn/a01ceb82c2074c3291dfb7f1f0fb88d8.gif)\n" +
    "）"
export const MOCK1 = "# 场景复现：\n" +
    "`react多组件间通讯`\n" +
    "\n" +
    "   *在做文章编辑发布的时候，文章各内容均分布于不同的组件，甚至存在于不同的页面，还存在组件销毁问题，想在点击发布的时候拿到其他组件的内容是比较麻烦的*\n" +
    "![在这里插入图片描述](https://img-blog.csdnimg.cn/46bfc0af94534a3b902b69bf93313ca3.png)\n" +
    "\n" +
    "---\n" +
    "\n" +
    "# 我最初的解决方案\n" +
    "`采用dva简易数据流model对全局数据进行管理`\n" +
    "\n" +
    " 1. 设立全局model\n" +
    "```javascript\n" +
    "export default {\n" +
    "    namespace: 'write',\n" +
    "\n" +
    "    state: {\n" +
    "        content: '',\n" +
    "        title: '',\n" +
    "        category: '',\n" +
    "        description:'',\n" +
    "        isPublic:false,\n" +
    "        coverUrl:''\n" +
    "    },\n" +
    "```\n" +
    "\n" +
    " 2. 各组件内同步model状态\n" +
    " \n" +
    "\n" +
    "```typescript\n" +
    "if (response.code === 200) {\n" +
    "                dispatch({\n" +
    "                    type: \"write/setPostByHand\",\n" +
    "                    payload: {\n" +
    "                        coverUrl: response.message\n" +
    "                    }\n" +
    "                });\n" +
    "```\n" +
    "\n" +
    " 3. 最终消费成功后重置全局model\n" +
    " \n" +
    "\n" +
    "```r\n" +
    "if (response.code===200){\n" +
    "                    message.success(\"发表成功\")\n" +
    "                    //清除全局model\n" +
    "                    dispatch({\n" +
    "                        type: \"write/cleanPostByHand\",\n" +
    "                    })\n" +
    "                    history.push(`home`)\n" +
    "                }else{\n" +
    "                    message.error(\"系统错误，请联系小星\")\n" +
    "                }\n" +
    "```\n" +
    "\n" +
    "---\n" +
    "\n" +
    "# 后续思路及改进措施：\n" +
    "\n" +
    "> 虽然这种方式成功实现了需求，但是在浏览器刷新的时候还是会造成数据丢失\n" +
    "> \n" +
    "所以昨晚睡觉的时候我想到是否可以用localstorage存储，这样就不存在数据丢失的问题了（天哪我为什么没有早想到![在这里插入图片描述](https://img-blog.csdnimg.cn/a01ceb82c2074c3291dfb7f1f0fb88d8.gif)\n" +
    "）"



export const initialPost:ContentAPI.Post = {
    id: -1,
    category: "initial",
    content: "### 登录 or 注册\n" +
        "- 先注册后登录（其他登录方式后续开放）--------------也可直接访问他人主页哦\n" +
        "![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/020fa974d15b4ea787adf4861769648c~tplv-k3u1fbpfcp-watermark.image?)\n" +
        "\n" +
        "\n" +
        "### 博客使用\n" +
        "\n" +
        "- 点击个人博客主页版的`配置`可以快速对博客进行相关完善，点击右侧的menu可进行`博客创作`和`随笔撰写`哦\n" +
        "\n" +
        "![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/342acb9973264b4094fc33f2f932ede7~tplv-k3u1fbpfcp-watermark.image?)\n" +
        "\n" +
        "![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14fa7fcb8a914009a929a527bd88e3d9~tplv-k3u1fbpfcp-watermark.image?)\n" +
        "\n" +
        "![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa97083c5189426f835cc89ce3cf013c~tplv-k3u1fbpfcp-watermark.image?)\n" +
        "\n" +
        "### 博文 or 随笔查看\n" +
        "\n" +
        "- 可在主页或者随笔页中查看博主文章和随笔记录\n" +
        "\n" +
        "![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dcad9ca9676848e4ba361eedcdb055d0~tplv-k3u1fbpfcp-watermark.image?)\n" +
        "\n" +
        "![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/36884532a3974a469e5a66762a8f6a24~tplv-k3u1fbpfcp-watermark.image?)\n" +
        "\n" +
        "### 互动留言\n" +
        "- 在浏览他人博客页的时候可进行留言（匿名留言和留言回复功能后续开放哦）\n" +
        "\n" +
        "![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9219b14606704430bfe7530b56040ddf~tplv-k3u1fbpfcp-watermark.image?)\n" +
        "### 广场\n" +
        "- 在广场可以进入他人的博客页（个人隐匿和外链功能近日上线）\n" +
        "\n" +
        "\n" +
        "![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5668f65060f42d7bffe8cf6a75ca9b4~tplv-k3u1fbpfcp-watermark.image?)\n" +
        "\n" +
        "## 写在最后\n" +
        "作为个人开发者，cross-end blog肯定还有很多bug、很多不足的地方，很感谢各位地参与\n" +
        "- 如果您对该博客有相关的想法和建议，或者发现了什么不得了的bug，欢迎去github提issue    ([cross-end blog前端github地址](https://github.com/xingxing2064989403/starBlog))\n" +
        "- 如果你也对全栈开发感兴趣，有创作想法，也可联系小星，下面是qq二维码\n" +
        "\n" +
        "![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df0f9a724f29489c87a9d0103d3900a5~tplv-k3u1fbpfcp-watermark.image?)\n",
    coverUrl: "https://staraway.love/blog/b71f394c-2cf9-409b-8e9f-fe67b2f112d4.png",
    description: "cross-end blog 指南！！！",
    title: "cross-end blog 使用指南"
}
