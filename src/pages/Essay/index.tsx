import React from 'react';
import styles from './index.less';
import {Affix, Col, Divider, Row, Timeline} from "antd";
import Head from "@/pages/Essay/component/Head";
import MyMarkdown from "@/components/MyMarkdown";
import {CSDN, JUEJIN, MOCK1, POST_SLOGAN} from "@/constants";
import BottomInfo from "@/pages/BlogDetail/component/BottomInfo";
import Toc from "@/pages/BlogDetail/component/Toc";
import Author from "@/components/Author";
import MyTimeLine from "@/pages/Essay/component/MyTimeLine";

// 脚手架示例组件
const Back: React.FC = () => {
    return (
        <>
            <Head title={"艺术源自生活"} subTitle={"将代码写成诗，将生活过成梦"}/>
            <Row justify={"start"} style={{marginTop:20}}>
                <Col span={15}  className={styles.left}>
                         <MyTimeLine/>
                </Col>
                <Col span={6} className={styles.right}>
                    <Affix offsetTop={60}>
                        <Author/>
                    </Affix>
                </Col>
            </Row>
        </>
    );
};

export default Back;
