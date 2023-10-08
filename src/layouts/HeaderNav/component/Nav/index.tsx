import {Menu, MenuProps} from 'antd';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
    GithubOutlined,
    InfoOutlined, LogoutOutlined,
    ReconciliationOutlined,
} from "@ant-design/icons";
import {history} from "umi";
import styles from './index.less'
import {useModel} from "@@/exports";
import {getIdFromUrl} from "@/utils/urlUtil";
import {localStorageUserSecurityKey} from "@/constants";


interface IProps {
    text: string;
}

const Nav: React.FC<IProps> = () => {

    const [currentId, setCurrentId] = useState<string>();

    const {initialUserData, setInitialUserData, fetchInitialUserData} = useModel('initialModel', (model) => ({
        setInitialUserData: model.setInitialUserData,
        initialUserData: model.initialUserData,
        fetchInitialUserData: model.fetchInitialUserData
    }));
    const {userinfo, securityInfo, labels, proverbs} = initialUserData!


    useLayoutEffect(() => {
        setCurrentId(getIdFromUrl(history.location.pathname));
    }, [])


    const items: MenuProps['items'] = [
        {
            label: '主页',
            key: `/blog/${currentId}/home`,
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
            key: `/blog/${currentId}/essay`,
            icon: <ReconciliationOutlined/>,
        },
        {
            label: '留言区',
            key: `/blog/${currentId}/messageBoard`,
            icon: <ReconciliationOutlined/>,
        },
        {
            label: '广场',
            key: `/blog/square`,
            icon: <ReconciliationOutlined/>,
        },
        // {
        //     label: '配置',
        //     key: `/blog/${currentId}/setting`,
        //     icon: <ReconciliationOutlined/>,
        //     disabled: localStorage.getItem('Authorization') === null || localStorage.getItem('Authorization') === undefined || localStorage.getItem('Authorization') === '' || localStorage.getItem('loginInformationId') !== idUrl,
        // },
        {
            label: '关于',
            key: `/blog/${currentId}/aboutMe`,
            icon: <InfoOutlined spin={true}/>,
            disabled: localStorage.getItem(localStorageUserSecurityKey)!== currentId,
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
            label: currentId === localStorage.getItem(localStorageUserSecurityKey) ? '退出登录' : '前往登录/注册',
            key: `logout`,
            icon: <LogoutOutlined/>,
            // disabled: true,
        },
    ];


    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key === 'logout') {
            localStorage.removeItem(localStorageUserSecurityKey);
            history.replace('/checkin');
            return;
        }
        if (e.key === 'Github') {
            return;
        }
        setCurrentId(e.key)
        if (e.key !== location.pathname) {
            history.push(e.key);
        }
    };


    return (
        <Menu onClick={onClick}
              defaultActiveFirst={true}
              // selectedKeys={[current]}
              mode="horizontal"
              inlineIndent={15}
              className={styles.menuNav}
              items={items}/>
    );
};

export default Nav;
