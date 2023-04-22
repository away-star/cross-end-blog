import {Menu, MenuProps} from 'antd';
import React, {useEffect, useState} from 'react';
import {
    GithubOutlined,
    InfoOutlined, LogoutOutlined,
    ReconciliationOutlined,
    SettingOutlined
} from "@ant-design/icons";
import {history} from "@@/core/history";
import styles from './index.less'
import {useModel} from "@@/exports";


const Nav: React.FC = () => {

    const [current, setCurrent] = useState('');

    const pathParts = history.location.pathname.trim().split('/');
    const idUrl = pathParts[pathParts.length - 2];

    const {initialData} = useModel('initialModel', (model) => ({
        initialData: model.initialData,
    }));
    const {personage} = initialData;
    useEffect(() => {

        console.log(initialData.personage?.loginInformationId === localStorage.getItem('loginInformationId'))

        if (history.location.pathname !== current) {
            setCurrent(history.location.pathname);
        }
    }, [])


    const items: MenuProps['items'] = [
        {
            label: '主页',
            key: `/blog/${personage?.loginInformationId}/home`,
            icon: <img src={'https://staraway.love/%E4%B8%BB%E9%A1%B5.svg'} alt={""} width={20}/>,
        },
        // {
        //     label: '技术',
        //     key: `/blog/${personage?.loginInformationId}/skill`,
        //     icon: <SettingOutlined/>,
        //     children: [
        //         {
        //             type: 'group',
        //             children: [
        //                 {
        //                     label: 'java',
        //                     key: `/blog/${personage?.loginInformationId}/skill/java`,
        //                 },
        //                 {
        //                     label: 'react',
        //                     key: `/blog/${personage?.loginInformationId}/skill/react`,
        //                 },
        //             ],
        //         },
        //     ],
        // },
        {
            label: '随笔',
            key: `/blog/${personage?.loginInformationId}/essay`,
            icon: <ReconciliationOutlined/>,
        },
        {
            label: '留言区',
            key: `/blog/${personage?.loginInformationId}/messageBoard`,
            icon: <ReconciliationOutlined/>,
        },
        {
            label: '广场',
            key: `/blog/square`,
            icon: <ReconciliationOutlined/>,
        },
        {
            label: '配置',
            key: `/blog/${personage?.loginInformationId}/setting`,
            icon: <ReconciliationOutlined/>,
            disabled: localStorage.getItem('Authorization') === null || localStorage.getItem('Authorization') === undefined || localStorage.getItem('Authorization') === ''||localStorage.getItem('loginInformationId')!==idUrl,
        },
        {
            label: '关于',
            key: `/blog/${personage?.loginInformationId}/aboutMe`,
            icon: <InfoOutlined spin={true}/>,
            disabled: localStorage.getItem('authorization') === null || localStorage.getItem('authorization') === undefined || localStorage.getItem('authorization') === '',
        },
        {
            label: (
                <a href="https://github.com/xingxing2064989403/starBlog" target="_blank" rel="noopener noreferrer">
                    Github仓库
                </a>
            ),
            icon: <GithubOutlined/>,
            key: 'Github',
        },
        {
            label: idUrl===localStorage.getItem('loginInformationId')?'退出登录':'前往登录/注册',
            key: `logout`,
            icon: <LogoutOutlined/>,
            // disabled: true,
        },
    ];


    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key === 'logout') {
            localStorage.removeItem('Authorization');
            localStorage.removeItem('loginInformationId');
            history.replace('/checkin');
            return;
        }
        if (e.key === 'Github') {
            return;
        }
        setCurrent(e.key)
        if (e.key !== location.pathname) {
            history.push(e.key);
        }
    };
    return (
        <Menu onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              inlineIndent={15}
              className={styles.menuNav}
              items={items}/>
    );
};

export default Nav;
