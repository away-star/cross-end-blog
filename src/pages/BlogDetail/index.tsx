import React, {useEffect, useState} from 'react';
import styles from './index.less';
import {Affix, Col, Divider, message, Row} from "antd";
import MyMarkdown from "@/components/MyMarkdown";

import Toc from "@/pages/BlogDetail/component/Toc";
import BottomInfo from "@/pages/BlogDetail/component/BottomInfo";
import TopIm from "@/pages/BlogDetail/component/TopIm";
import {history} from "umi";
import DescriptionCard from "@/pages/BlogDetail/component/DescriptionCard";
import FloatingButtons from "@/pages/BlogDetail/component/FloatingButtons";
import {postDetail} from "../../../services/content/api/postController";
import {DEFAULT_CSDN_ADDR, DEFAULT_JUEJIN_ADDR, DEFAULT_SLOGAN} from "@/constants";


const Back: React.FC = () => {

    const id = history.location.pathname.split("/")[3];
    const [postinfo, setPostinfo] = useState<ContentAPI.PostRequest>()


    useEffect(() => {
        const fetchData = async () => {
            const res = await postDetail({
                postId: parseInt(id)
            })
            if (res.code === 200) {
                setPostinfo(res.data?.post)
            } else {
                message.error('获取文章详情失败')
            }
        }
        fetchData().then(() => {
            message.success("获取文章详情成功")
        })
    }, [])

    return (
        <>

            <TopIm like={1} title={postinfo?.title ?? ''} view={1}/>
            <Row justify={"center"} style={{marginTop: 20}}>

                <Col xl={1} md={1}>
                    <Affix offsetTop={60}>
                        <FloatingButtons/>
                    </Affix>
                </Col>
                <Col xl={12} md={14} style={{backgroundColor: "transparent"}}>
                    <div className={styles.left}>
                        {/*<MyMarkdown children={post?.content??''}/>*/}
                        {/*<MarkDown content={post?.content??''}/>*/}
                        <DescriptionCard description={postinfo?.description ?? ''} cover={postinfo?.coverUrl ?? ''}/>
                        <Divider/>
                        <MyMarkdown text={postinfo?.content ?? ''}/>
                        <Divider/>
                        <BottomInfo juejin={DEFAULT_JUEJIN_ADDR} csdn={DEFAULT_CSDN_ADDR} slogan={DEFAULT_SLOGAN}/>
                    </div>
                </Col>
                <Col xl={4} style={{marginLeft: 10}}>
                    <Affix offsetTop={60}>
                        <Toc text={postinfo?.content ?? " "}/>
                    </Affix>
                </Col>
            </Row>
        </>
    );
};

export default Back;
