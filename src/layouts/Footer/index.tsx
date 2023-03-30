import React, {useState} from "react";
import {DefaultFooter} from "@ant-design/pro-components";
import {GithubOutlined, StarOutlined} from "@ant-design/icons";
import './index.less'

const Footer: React.FC = () => {
    return (
        <div>
            <DefaultFooter
                copyright="@滇ICP备2023000024号-1"
                links={[
                    {
                        key: 'starBlog1',
                        title: 'star blog',
                        href: 'https://pro.ant.design',
                        blankTarget: true
                    } ,
                    {
                        key: 'starBlog2',
                        title: <StarOutlined />,
                        href: 'https://pro.ant.design',
                        blankTarget: true
                    },
                    {
                        key: 'starBlog3',
                        title: 'design by star',
                        href: 'https://pro.ant.design',
                        blankTarget: true
                    }
                ]}
            />
        </div>
    )
};

export default Footer;