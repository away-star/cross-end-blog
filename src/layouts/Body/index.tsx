import React from "react";
import {PageContainer, ProCard} from "@ant-design/pro-components";
import {Col, Row} from "antd";
import Block from "@/components/Post";
import {Outlet} from "umi";
import {history} from "@@/core/history";
import styles from './index.less'


const Body: React.FC = () => {
    return (
        <div>

               <Outlet/>

        </div>
    )
};

export default Body;
