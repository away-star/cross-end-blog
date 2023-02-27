//路由表！！！
export default [
    {
        name: 'checkIn',
        path: '/checkIn',
        title: "666",
        component: './CheckIn',
    },
    {
        name: '/test',
        //todo 如何路由加参数
        path: '/test/:id',
        component: './Test',
        /*    wrappers: [
                '@/wrappers/auth/index.tsx',
            ],*/
    },
    {
        name: '404',
        path: '/404',
        component: './404',
    },
    {
        //todo   通过*来匹配404
        path: '*',
        component: './404',
    },
    {
        path: '/blog',
        component: '@/layouts/Main',
        routes: [
            {
                //todo  此处一定要写全路径
                path: '/blog/home',
                component: './Home',
            },
            {
                //todo  此处一定要写全路径
                path: '/blog/aboutMe',
                component: './AboutMe',
            },
            {
                //todo  此处一定要写全路径
                path: '/blog/skill/:category',
                component: './SkillBlog',
               /* routes: [
                    {
                        path: '/blog/skill/java',
                        component: './JavaBlog',
                    },
                    {
                        path: '/blog/skill/react',
                        component: './SkillBlog',
                    }
                ]*/
            },
            {
                //todo  此处一定要写全路径
                path: '/blog/life',
                component: './Life',
               /* routes: [
                    {
                        path: '/blog/thought/livelihood',
                        component: './Livelihood',
                    },
                    {
                        path: '/blog/thought/life',
                        component: './Life',
                    }
                ]*/
            },
            {
                component: './404'
            }
        ]
    },
]
