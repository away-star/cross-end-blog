import React, {useEffect, useState} from 'react';
import styles from './index.less';
import {Affix, Col, Divider, message, Row} from "antd";
import MyMarkdown from "@/components/MyMarkdown";
import {CSDN, initialPost, JUEJIN, MOCK1, POST_SLOGAN} from "@/constants";
import Toc from "@/pages/BlogDetail/component/Toc";
import BottomInfo from "@/pages/BlogDetail/component/BottomInfo";
import TopIm from "@/pages/BlogDetail/component/TopIm";
import {history} from "umi";
import {getPostDetail} from "@/services/api";
import DescriptionCard from "@/pages/BlogDetail/component/DescriptionCard";
import FloatingButtons from "@/pages/BlogDetail/component/FloatingButtons";


const Back: React.FC = () => {

    const id = history.location.pathname.split("/")[3];
    const [post, setPost] = useState<API.Post>()


    useEffect(() => {
        const fetchData = async () => {
            const res = await getPostDetail(id)
            if (res.code === 200) {
                setPost(res.data)
            } else {
                message.error('获取文章详情失败')
            }
        }
        if (id !== '-1') {
            fetchData()
        }else{
            setPost(initialPost)
        }
    }, [])

    return (
        <>

            <TopIm like={1} title={post?.title ?? ''} view={1}/>
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
                        <DescriptionCard description={post?.description ?? ''} cover={post?.coverUrl ?? ''}/>
                        <Divider/>
                        <MyMarkdown text={post?.content ?? ''}/>
                        <Divider/>
                        <BottomInfo juejin={JUEJIN} csdn={CSDN} slogan={POST_SLOGAN}/>
                    </div>
                </Col>
                <Col xl={4} style={{marginLeft: 10}}>
                    <Affix offsetTop={60}>
                        <Toc text={post?.content ?? " "}/>
                    </Affix>
                </Col>
            </Row>
        </>
    );
};

export default Back;
