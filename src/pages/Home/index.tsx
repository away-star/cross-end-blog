import {Affix, Col, Image, List, message, Row} from "antd";
import React, {useEffect, useRef, useState} from "react";
import Author from "@/components/Author";
import styles from './index.less'
import PostCard from "@/components/PostCard";
import {getPost} from "@/services/api";
import {history} from "@@/core/history";
import {useModel} from "@@/exports";
import Loading from "@/loading";


const HomePage: React.FC = () => {
    const pathParts = history.location.pathname.trim().split('/');
    const idUrl = pathParts[pathParts.length - 2];
    const {initialData,getRandSlide} = useModel('initialModel', (model) => ({
        initialData: model.initialData,
        getRandSlide: model.getRandSlide
    }));
    const {userInfo, personage} = initialData;

    const [post, setPost] = useState<API.Post[]>([]);
    const [loading, setLoading] = useState(true); // 加载状态变量
    //const [fetching, setFetching] = useState(false);

    const [postLoading, setPostLoading] = useState(false);

    //随机首页展示图片
    const fetchData = async () => {
        try {
            const res = await getPost({
                step: 20,
                lastUpdateDate: post[post.length-1]?.updateTime,
                authorId: idUrl?.toString() ?? '2021120053'
            });
            if (res.code === 200) {
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
                setPost(prevData => [...prevData, ...post]); // 此处需要使用 setPost 来更新 post
            } else {
                message.error(res.msg);
                history.push('/checkin');
            }
        } catch (error) {
            message.error('请求失败');
        } finally {
            setLoading(false);
        }
    };
    // 滚动条处理逻辑
    // const onScrollEvent = debounce(() => {
    //     if (postLoading) {
    //         return;
    //     }
    //     //setPostLoading(true);
    //     console.log('滚动条事件触发')
    //     // 如果正在加载数据中，不重复进行操作
    //     // if (loading) return;
    //     const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //     const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    //     const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    //     const isBottom = scrollTop + clientHeight > scrollHeight - 50;
    //     if (isBottom) {
    //         // 发送请求获取更多数据...
    //         console.log('滚动到底部了')
    //         fetchData();
    //     }
    // }, 1000);

    useEffect(() => {


        console.log('useEffect')
        fetchData();
       // window.addEventListener("scroll", onScrollEvent)
    }, []);


    return (
        <div>
            {loading ? (
                <Loading/>
            ) : (
                // 页面渲染代码
                <div>
                    <div className={styles.homeTop} >
                        <Image preview={false} width={'100%'} height={'100vh'}
                               src={getRandSlide()}/>
                        <div className={styles.proverbs}>
                            {personage?.proverbs.map((item, index) => (
                                <p key={index}>{item.context}</p>
                            ))
                            }
                        </div>
                        <div className={styles.welcome}><p >欢迎来到{userInfo?.nickname}的博客</p></div>
                    </div>

                    <Row justify={"center"} className={styles.homeBody}>
                        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                            {/*{post.map((item, index) => (*/}
                            {/*    <div key={index}*/}
                            {/*         className={styles.post}*/}
                            {/*         style={{float: index % 2 === 0 ? 'right' : 'left'}}>*/}
                            {/*        <PostCard post={item}/>*/}
                            {/*    </div>*/}
                            {/*))}*/}

                            <List
                                loading={postLoading}
                                //itemLayout="horizontal"
                                dataSource={post}
                                renderItem={(item, index) => (
                                    <List.Item style={{float: index % 2 === 0 ? 'left' : 'right'}}
                                               className={styles.post}>
                                        <PostCard post={item}/>
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col xs={0} sm={0} md={5} lg={6} xl={6} offset={1}>
                            <Affix offsetTop={60}>
                                <div className={styles.author}>
                                    <Author avatar={userInfo?.avatar} nickname={userInfo?.nickname}
                                            subtitle={userInfo?.subname} textBody={userInfo?.idiograph}/>
                                </div>
                            </Affix>
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    );
};

export default HomePage;
