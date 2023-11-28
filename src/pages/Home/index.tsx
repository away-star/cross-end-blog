import {Affix, Col, Image, List, message, Row} from "antd";
import React, {useEffect, useState} from "react";
import Author from "@/components/Author";
import styles from './index.less'
import PostCard from "@/components/PostCard";

import {history} from "umi";
import {useModel} from "@@/exports";
import Loading from "@/loading";
import {initialPost} from "@/constants";
import {postPage} from "../../../services/content/api/postController";
import {getRandSlide} from "@/utils/sevice";


const HomePage: React.FC = () => {
    const pathParts = history.location.pathname.trim().split('/');
    const idUrl = pathParts[pathParts.length - 2];
    const {initialUserData, setInitialUserData, fetchInitialUserData} = useModel('initialModel', (model) => ({
        setInitialUserData: model.setInitialUserData,
        initialUserData: model.initialUserData,
        fetchInitialUserData: model.fetchInitialUserData
    }));
    const {userinfo, securityInfo, labels, proverbs} = initialUserData!

    const [loading, setLoading] = useState(true); // 加载状态变量
    //const [fetching, setFetching] = useState(false);
    const [postLoading, setPostLoading] = useState(false);
    const [postList, setPostList] = useState<ContentAPI.PostSimpleVo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await postPage({
                authorId: parseInt(idUrl), category: undefined, step: 5
            });
            if (res.code === 200) {
                setPostList(res.data?.records ?? []); // 设置数据
            } else {
                message.error(res.msg);
                history.push('/checkin');
            }
        }
        fetchData().then(() => {
            setLoading(false);
        })
    }, []);

    return (
        <div>
            {loading ? (
                <Loading/>
            ) : (
                // 页面渲染代码
                <div>
                    <div className={styles.homeTop}>
                        <Image preview={false} width={'100%'} height={'100vh'} className={styles.slide}
                               src={getRandSlide(userinfo?.slideShow ?? "")}/>
                        <div className={styles.proverbs}>
                            {
                                proverbs?.map((item, index) => (
                                    <p key={index}>{item.context}</p>
                                ))
                            }
                        </div>
                        <div className={styles.welcome}><p>欢迎来到{userinfo?.nickname}的博客</p></div>
                    </div>

                    <Row justify={"center"} className={styles.homeBody}>
                        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                            {/*{post.map((item, index.ts) => (*/}
                            {/*    <div key={index.ts}*/}
                            {/*         className={styles.post}*/}
                            {/*         style={{float: index.ts % 2 === 0 ? 'right' : 'left'}}>*/}
                            {/*        <PostCard post={item}/>*/}
                            {/*    </div>*/}
                            {/*))}*/}
                            {postList.length > 0 ?
                                <List
                                    loading={postLoading}
                                    //itemLayout="horizontal"
                                    dataSource={postList}
                                    renderItem={(item, index) => (
                                        <List.Item style={{float: index % 2 === 0 ? 'left' : 'right'}}
                                                   className={styles.post}>
                                            <PostCard post={item}/>
                                        </List.Item>
                                    )}
                                /> :
                                <div style={{float: 'right', width: '80%'}}>
                                    <PostCard post={initialPost}/>
                                </div>
                            }
                        </Col>
                        <Col xs={0} sm={0} md={5} lg={6} xl={6} offset={1}>
                            <Affix offsetTop={60}>
                                <div className={styles.author}>
                                    <Author
                                        proverbs={undefined}
                                        userinfo={userinfo ?? {}}
                                    />
                                    {/*<Waterfall items={} columnWidth={250} gutter={20} />*/}
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
