import {Menu, MenuProps} from 'antd';
import React from 'react';
import {
    CommentOutlined,
    FundProjectionScreenOutlined,
    GithubOutlined,
    HomeOutlined,
    InfoOutlined,
    LogoutOutlined,
    ReconciliationOutlined,
} from "@ant-design/icons";
import {history} from "umi";
import styles from './index.less'
import {useModel} from "@@/exports";
import {localStorageUserSecurityKey} from "@/constants";


interface IProps {
    text: string;
}

const Nav: React.FC<IProps> = () => {


    const {initialUserData, setInitialUserData, fetchInitialUserData} = useModel('initialModel', (model) => ({
        setInitialUserData: model.setInitialUserData,
        initialUserData: model.initialUserData,
        fetchInitialUserData: model.fetchInitialUserData
    }));
    const {userinfo, securityInfo, labels, proverbs} = initialUserData!


    const items: MenuProps['items'] = [
        {
            label: '主页',
            key: `/blog/${securityInfo?.id}/home`,
            icon: <HomeOutlined />,
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
            key: `/blog/${securityInfo?.id}/essay`,
            icon: <ReconciliationOutlined/>,
        },
        {
            label: '留言区',
            key: `/blog/${securityInfo?.id}/messageBoard`,
            icon: <CommentOutlined />,
        },
        {
            label: '广场',
            key: `/blog/square`,
            icon: <FundProjectionScreenOutlined />,
        },
        // {
        //     label: '配置',
        //     key: `/blog/${currentId}/setting`,
        //     icon: <ReconciliationOutlined/>,
        //     disabled: localStorage.getItem('Authorization') === null || localStorage.getItem('Authorization') === undefined || localStorage.getItem('Authorization') === '' || localStorage.getItem('loginInformationId') !== idUrl,
        // },
        {
            label: '关于',
            key: `/blog/${securityInfo?.id}/aboutMe`,
            icon: <InfoOutlined spin={true}/>,
            disabled: localStorage.getItem(localStorageUserSecurityKey) !== securityInfo?.id,
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
            label: securityInfo?.id === localStorage.getItem(localStorageUserSecurityKey) ? '退出登录' : '前往登录/注册',
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
        if (e.key !== location.pathname) {
            history.push(e.key);
        }
    };


    return (
        <Menu onClick={onClick}
              defaultActiveFirst={true}
              mode="horizontal"
              inlineIndent={15}
              className={styles.menuNav}
              items={items}/>
    );
};

export default Nav;
