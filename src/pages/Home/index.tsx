import {ProCard} from '@ant-design/pro-components';
import {useModel} from '@umijs/max';
import {Affix, Col, Divider, Image, Row, Space} from "antd";
import React, {useEffect, useState} from "react";
import Post from "@/components/Post";
import Author from "@/components/Author";
import {EMAIL, FLAG1, QQ} from "@/constants";
import styles from './index.less'
import Information1 from "@/components/Information1";
import Card2 from "@/components/Card2";
import homeImg from '@/assets/home1.png'



const HomePage: React.FC = () => {

    // const {name} = useModel('global');

    //const {user} = useModel('model');


    useEffect(() => {

    }, [])
    return (
        <div>
            <div className={styles.homeTop}>
                <Image className={styles.img} preview={false}
                       src={homeImg}/>
                <div className={styles.proverbs}>
                    <p>世界以痛吻我，我报之以歌世界以痛吻我，我报之以歌</p>
                    <p>坚定的90%唯物主义者</p>
                    <p>越努力越幸运</p>
                </div>
                <div className={styles.welcome}><p>欢迎来到小星的博客</p></div>
            </div>

            <Row justify={"center"}>
                <Col className={styles.homeTop}>
                    {/* 遍历字符串，给每个字符对应的延时，将透明度从0至1*/}
                    <div><Card2 name={"海底月是天上月，眼前人是心上人"}/></div>
                </Col>
                <Col span={22} flex={"auto"}>
                    <ProCard style={{marginBlockStart: 1}} gutter={1} ghost size={"small"}>
                        <ProCard colSpan={{xs: 24, sm: 24, md: 24, lg: 17, xl: 17}} className={styles.proCardList}>
                            <Post/>
                        </ProCard>
                        <ProCard colSpan={{xs: 0, sm: 0, md: 0, lg: 7, xl: 7}} className={styles.proCardList}>
                            { /*吸顶*/}
                            <Affix offsetTop={50}>
                                <Author/>
                                <Divider/>
                                <Row>
                                    {//information1
                                        <Space align="center" size={"middle"}>
                                            <Col span={10}><Information1 date={"01.01.2023"} title={"contact"}
                                                                         content={QQ + "\n" + "\n" + EMAIL}/></Col>
                                            {//隔开
                                                <Col/>}
                                            <Col span={10}> <Information1 date={"01.01.2023"} title={FLAG1}
                                                                          content={"越努力越幸运"}/></Col>
                                        </Space>}

                                    {/*   {//information2
                                        <Information2/>

                                    }*/}
                                </Row>
                            </Affix>
                        </ProCard>

                    </ProCard>
                </Col>
            </Row>
        </div>
    );
};

export default HomePage;
