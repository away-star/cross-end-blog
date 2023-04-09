
export const CLIENT_ID = 'cross-end';
export const CLIENT_SECRET = 'cross-end';
export const GRANT_TYPE = 'password';
export const TOKEN_PREFIX = 'Bearer ';





export const DEFAULT_NAME = 'Umi Max';
export const FLAG1 = 'FIGHTING';
export const FLAG2 = '越努力越幸运';
export const QQ = 'QQ:984494524';
export const EMAIL = 'email:2064989403@qq.com';
export const AUTHOR_AVATAR = 'https://staraway.love/blog/authorAvatar.jpg';
export const JUEJIN = 'https://juejin.cn/user/207157472794621';
export const CSDN = 'https://blog.csdn.net/qq_67602816';
export const POST_SLOGAN = '如果觉得内容不错，欢迎分享给其他人哦';


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



