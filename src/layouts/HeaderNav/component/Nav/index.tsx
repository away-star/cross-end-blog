import {Menu, MenuProps} from 'antd';
import React, {useEffect, useState} from 'react';
import {
    GithubOutlined,
    InfoOutlined,
    ReconciliationOutlined,
    SettingOutlined
} from "@ant-design/icons";
import {history} from "@@/core/history";
import styles from './index.less'
import {useModel} from "@@/exports";




const Nav: React.FC = () => {

    const [current, setCurrent] = useState('');
    const {initialData} = useModel('initialModel', (model) => ({
        initialData: model.initialData,
    }));
    const {personage} = initialData;
    useEffect(() => {
        if (history.location.pathname !== current) {
            setCurrent(history.location.pathname);
        }
    },[])

    const items: MenuProps['items'] = [
        {
            label: '主页',
            key: `/blog/${personage?.loginInformationId}/home`,
            icon: <img src={'https://staraway.love/%E4%B8%BB%E9%A1%B5.svg'} alt={""} width={20}/>,
        },
        {
            label: '技术',
            key: `/blog/${personage?.loginInformationId}/skill`,
            icon: <SettingOutlined/>,
            children: [
                {
                    type: 'group',
                    children: [
                        {
                            label: 'java',
                            key: `/blog/${personage?.loginInformationId}/skill/java`,
                        },
                        {
                            label: 'react',
                            key: `/blog/${personage?.loginInformationId}/skill/react`,
                        },
                    ],
                },
            ],
        },
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
            label: '关于',
            key: `/blog/${personage?.loginInformationId}/aboutMe`,
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


    const onClick: MenuProps['onClick'] = (e) => {
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
