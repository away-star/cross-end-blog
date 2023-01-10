//路由表！！！
export default [
    {
        name: 'login',
        path: '/login',
        title: "666",
        component: './Login',
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
                path: '/blog/stationLog',
                component: './StationLog',
            },
            {
                //todo  此处一定要写全路径
                path: '/blog/skill',
                routes: [
                    {
                        path: '/blog/skill/java',
                        component: './JavaBlog',
                    },
                    {
                        path: '/blog/skill/react',
                        component: './ReactBlog',
                    }
                ]
            },
            {
                //todo  此处一定要写全路径
                path: '/blog/thought',
                routes: [
                    {
                        path: '/blog/thought/livelihood',
                        component: './Livelihood',
                    },
                    {
                        path: '/blog/thought/life',
                        component: './Life',
                    }
                ]
            },
            {
                component: './404'
            }
        ]
    },
]