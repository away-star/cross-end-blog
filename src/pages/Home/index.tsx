import {ProCard} from '@ant-design/pro-components';
import {useModel} from '@umijs/max';
import {Affix, Col, Divider, Image, Row, Space} from "antd";
import React, {useEffect, useState} from "react";
import Post from "@/components/Post";
import Author from "@/components/Author";
import {EMAIL, FLAG1, QQ} from "@/constants";
import styles from './index.less'
import homeImg from '@/assets/home1.png'
import PostCard from "@/components/PostCard";
import SelectCard from "@/layouts/Body/component/SelectCard";
import {getPost} from "@/services/api";


const HomePage: React.FC = () => {

    const [post, setPost] = useState<API.Post[]>([])

    useEffect(() => {
        getPost({step: 10}).then(
            (res) => {
                console.log(res.data.records)
                // 将后端返回的 Essay 数组转换为与前端定义的数据格式一致的数组

                const post = res.data.records.map((item: any) => ({
                    createTime: item.createTime,
                    updateTime: item.updateTime,
                    coverUrl: item.coverUrl,
                    content: item.content,
                    category: item.category,
                    description: item.description,
                    id: item.id,
                    title: item.title,
                }));
                // 将前面转换好的数组赋值给组件状态
                // setEssay(essays);
                setPost(post)
            }
        )
    }, [])


    return (
        <div>
            <div className={styles.homeTop}>
                <Image className={styles.img} preview={false}
                       src={homeImg}/>
                <div className={styles.proverbs}>
                    <p>世界以痛吻我，我报之以歌</p>
                    <p>坚定的90%唯物主义者</p>
                    <p>越努力越幸运</p>
                </div>
                <div className={styles.welcome}><p>欢迎来到小星的博客</p></div>
            </div>


            <Row justify={"center"} className={styles.homeBody}>
                <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                    {post.map((item,index)=>(
                        <div key={item.id} className={styles.post} style={{float: index%2===0?'right':'left'}}>
                            <PostCard post={item}/>
                        </div>
                        )
                    )}

                </Col>
                <Col xs={0} sm={0} md={5} lg={6} xl={6} offset={1}>
                    <div className={styles.author}>
                        <Author/>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default HomePage;
