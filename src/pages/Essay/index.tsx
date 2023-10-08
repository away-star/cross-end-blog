import React, {useEffect, useState} from 'react';
import styles from './index.less';
import {Affix, Col, Divider, List, message, Row, Timeline} from "antd";
import Head from "@/components/Head";
import Author from "@/components/Author";

import {history} from "@@/core/history";
import EssayMel from "@/pages/Essay/component/EssayMel";
import {useModel} from "@@/exports";
import {essayPage} from "../../../services/content/api/essayController";
import {getRandSlide} from "@/utils/sevice";
import {DEFAULT_SLIDE} from "@/constants";


const Essay: React.FC = () => {
    const [essayList,setEssayList] = useState<ContentAPI.EssayVo[]>([])
    const [initLoading, setInitLoading] = useState<boolean>(true);
    const {initialUserData, setInitialUserData, fetchInitialUserData} = useModel('initialModel', (model) => ({
        setInitialUserData: model.setInitialUserData,
        initialUserData: model.initialUserData,
        fetchInitialUserData: model.fetchInitialUserData
    }));
    const {userinfo, securityInfo, labels, proverbs} = initialUserData!

    const pathParts = history.location.pathname.trim().split('/');
    const idUrl = pathParts[pathParts.length - 2];

    useEffect(() => {
        const fetchData=async ()=>{
            const res=await essayPage({authorId: parseInt(idUrl), lastUpdateDate: undefined, step: 0})
            if(res.code===200){
                setEssayList(res.data?.records??[])
                setInitLoading(false);
            }else{
                message.error(res.msg);
                history.push('/checkin');
            }
        }
        setInitLoading(true)
        fetchData().then(()=>{
            setInitLoading(false);
        })
    },[])

    return (
        <>
            <Head title={"从生命的深处寻找答案"} subTitle={"生命是如此奇妙而复杂的存在，它的短暂与宝贵令我们不得不反思生命给予我们的意义。每一个人都有属于自己的故事。"} backUrl={getRandSlide(userinfo?.slideShow??DEFAULT_SLIDE)}/>

            <Row justify={"center"} style={{marginTop:20}}>

                <Col span={14}  className={styles.left}>
                    <List
                        loading={initLoading}
                        itemLayout="horizontal"
                        dataSource={essayList}
                        renderItem={(item,index) => (
                            <List.Item>
                                <EssayMel essay={item} index={index}/>
                            </List.Item>
                        )}
                    />

                </Col>
                <Col span={7} className={styles.right}>
                    <Affix offsetTop={60}>
                        <Author  proverbs={undefined} userinfo={userinfo??{}}/>
                    </Affix>
                </Col>
            </Row>
        </>
    );
};

export default Essay;
