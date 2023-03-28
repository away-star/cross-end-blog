import React from 'react';
import styles from './index.less';
import {Affix, Col, Divider, Row} from "antd";
import MyMarkdown from "@/components/MyMarkdown";
import {CSDN, JUEJIN, MOCK1, POST_SLOGAN} from "@/constants";
import Toc from "@/pages/BlogDetail/component/Toc";
import BottomInfo from "@/pages/BlogDetail/component/BottomInfo";
import TopIm from "@/pages/BlogDetail/component/TopIm";


const Back: React.FC = () => {
    return (

        <>
            <TopIm like={1} title={"dasdasda"} view={1}/>

            <Row justify={"center"}>
                <Col span={12} style={{backgroundColor: "transparent"}}>
                    <div className={styles.left}>
                        <MyMarkdown text={MOCK1}/>
                        <Divider/>
                        <BottomInfo juejin={JUEJIN} csdn={CSDN} slogan={POST_SLOGAN}/>
                    </div>
                </Col>
                <Col span={4} style={{marginLeft: 10}}>
                    <Affix offsetTop={60}>
                    <Toc text={MOCK1}/>
                    </Affix>
                </Col>
            </Row>
        </>
    );
};

export default Back;
