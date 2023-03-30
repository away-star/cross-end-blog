import {Menu, MenuProps} from 'antd';
import React, {useState} from 'react';
import {
    GithubOutlined,
    InfoOutlined,
    ReconciliationOutlined,
    SettingOutlined
} from "@ant-design/icons";
import {history} from "@@/core/history";
import styles from './index.less'


const items: MenuProps['items'] = [
    {
        label: '主页',
        key: '/blog/home',
        icon: <img src={'https://staraway.love/%E4%B8%BB%E9%A1%B5.svg'} alt={""} width={20}/>,
    },
    {
        label: '技术',
        key: '/blog/skill',
        icon: <SettingOutlined/>,
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'java',
                        key: '/blog/skill/java',
                    },
                    {
                        label: 'react',
                        key: '/blog/skill/react',
                    },
                ],
            },
        ],
    },
    {
        label: '随笔',
        key: '/blog/essay',
        icon: <ReconciliationOutlined/>,
    },
    {
        label: '关于',
        key: '/blog/aboutMe',
        icon: <InfoOutlined spin={true}/>,
        disabled: true,
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Github仓库
            </a>
        ),
        icon: <GithubOutlined/>,
        key: 'Github',
    },
];

const Nav: React.FC = () => {

    const [current, setCurrent] = useState('/blog/home');


    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key)
        if (e.key !== location.pathname) {
            history.push(e.key);
        }
    };
    return (
        <Menu onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              inlineIndent={11}
              className={styles.menuNav}
              items={items}/>
    );
};

export default Nav;
