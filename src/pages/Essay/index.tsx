import React, {useEffect, useState} from 'react';
import styles from './index.less';
import {Affix, Col, Divider, List, Row, Timeline} from "antd";
import Head from "@/pages/Essay/component/Head";
import Author from "@/components/Author";
import MyTimeLine from "@/pages/Essay/component/MyTimeLine";
import {getEssays} from "@/services/api";
import {history} from "@@/core/history";
import EssayMel from "@/pages/Essay/component/EssayMel";

// 脚手架示例组件
const Essay: React.FC = () => {
    const [essay,setEssay] = useState<API.Essay[]>([])
    const [initLoading, setInitLoading] = useState<boolean>(true);

    const pathParts = history.location.pathname.trim().split('/');
    const idUrl = pathParts[pathParts.length - 2];

    useEffect(() => {
        getEssays({step:10,authorId:idUrl}).then(
            (res)=>{
                console.log(res)
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
                setInitLoading(false);
            }
        )
    },[])

    return (
        <>
            <Head title={"艺术源自生活"} subTitle={"将代码写成诗，将生活过成梦"}/>

            <Row justify={"center"} style={{marginTop:20}}>

                <Col span={14}  className={styles.left}>
                    <List
                        loading={initLoading}
                        itemLayout="horizontal"
                        dataSource={essay}
                        renderItem={(item,index) => (
                            <List.Item>
                                <EssayMel essay={item} index={index}/>
                            </List.Item>
                        )}
                    />

                </Col>
                <Col span={7} className={styles.right}>
                    <Affix offsetTop={60}>
                        <Author/>
                    </Affix>
                </Col>
            </Row>
        </>
    );
};

export default Essay;
