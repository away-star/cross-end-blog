import {Affix, Col, Image, Row} from "antd";
import React, {useEffect, useState} from "react";
import Author from "@/components/Author";
import styles from './index.less'
import homeImg from '@/assets/home1.png'
import PostCard from "@/components/PostCard";
import {getPost} from "@/services/api";
import {history} from "@@/core/history";
import {useModel} from "@@/exports";


const HomePage: React.FC = () => {

    const pathParts = history.location.pathname.trim().split('/');
    const idUrl = pathParts[pathParts.length - 2];
    const {initialData} = useModel('initialModel', (model) => ({
        initialData: model.initialData,
    }));
    const {userInfo} = initialData;


    const [post, setPost] = useState<API.Post[]>([])

    useEffect(() => {
        getPost({step: 10,authorId:idUrl?.toString()??'2021120053'}).then(
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
                    <Affix offsetTop={60}>
                    <div className={styles.author}>
                        <Author avatar={userInfo?.avatar} nickname={userInfo?.nickname}  subtitle={userInfo?.idiograph} textBody={userInfo?.idiograph}/>
                    </div>
                    </Affix>
                </Col>
            </Row>
        </div>
    );
};

export default HomePage;
