import React, {useEffect, useState} from 'react';
import styles from './index.less';
import {Affix, Col, Divider, Row, Timeline} from "antd";
import Head from "@/pages/Essay/component/Head";
import MyMarkdown from "@/components/MyMarkdown";
import {CSDN, JUEJIN, MOCK1, POST_SLOGAN} from "@/constants";
import BottomInfo from "@/pages/BlogDetail/component/BottomInfo";
import Toc from "@/pages/BlogDetail/component/Toc";
import Author from "@/components/Author";
import MyTimeLine from "@/pages/Essay/component/MyTimeLine";
import {getEssays} from "@/services/api";

// 脚手架示例组件
const Essay: React.FC = () => {
    const [essay,setEssay] = useState<API.Essay[]>([])


    useEffect(() => {
        getEssays({step:10}).then(
            (res)=>{
                console.log(res.data.records)
                // 将后端返回的 Essay 数组转换为与前端定义的数据格式一致的数组
                const essays = res.data.records.map((item: any) => ({
                    createTime: item.createTime,
                    updateTime: item.updateTime,
                    urls: item.urls,
                    content: item.content,
                    open: item.open,
                    mood: item.mood,
                }));
                // 将前面转换好的数组赋值给组件状态
                setEssay(essays);
            }
        )
    },[])

    return (
        <>
            <Head title={"艺术源自生活"} subTitle={"将代码写成诗，将生活过成梦"}/>
            <Row justify={"start"} style={{marginTop:20}}>
                <Col span={15}  className={styles.left}>
                         <MyTimeLine  essay={essay}/>
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

export default Essay;
