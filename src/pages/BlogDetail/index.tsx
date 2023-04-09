import React, {useEffect, useState} from 'react';
import styles from './index.less';
import {Affix, Col, Divider, Row} from "antd";
import MyMarkdown from "@/components/MyMarkdown";
import {CSDN, JUEJIN, MOCK1, POST_SLOGAN} from "@/constants";
import Toc from "@/pages/BlogDetail/component/Toc";
import BottomInfo from "@/pages/BlogDetail/component/BottomInfo";
import TopIm from "@/pages/BlogDetail/component/TopIm";
import {history} from "umi";
import {getPostDetail} from "@/services/api";



const Back: React.FC = () => {

    const id = history.location.pathname.split("/")[3];
    const [post,setPost] = useState<API.Post>()


    useEffect(() => {
        getPostDetail(id).then(
            (res)=>{
              console.log(res.data)
                setPost(res.data)
            })
    },[])

    return (
        <>
            <TopIm like={1} title={post?.title??''} view={1}/>
            <Row justify={"center"}>
                <Col span={12} style={{backgroundColor: "transparent"}}>
                    <div className={styles.left}>
                        <MyMarkdown text={post?.content??''}/>
                        <Divider/>
                        <BottomInfo juejin={JUEJIN} csdn={CSDN} slogan={POST_SLOGAN}/>
                    </div>
                </Col>
                <Col span={4} style={{marginLeft: 10}}>
                    <Affix offsetTop={60}>
                        <Toc text={post?.content??" "}/>
                    </Affix>
                </Col>
            </Row>
        </>
    );
};

export default Back;
