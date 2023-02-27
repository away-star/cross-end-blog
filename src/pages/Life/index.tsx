/*
import React, {useEffect, useState} from "react";
import styles from "./index.less";
import {Affix, Col, Divider, Image, Row} from "antd";
import Jotting from "@/pages/Life/component/Jotting";
import {getPostPage} from "@/services/api/post";
import {getEssayPage} from "@/services/api/essay";
import Author from "@/components/Author";


const Life: React.FC = () => {

    const [essayData,setEssayData]=useState<API.Essay[]>()


    useEffect(() => {
        const fetchData = async () => {
            const result = await getEssayPage(5)
            setEssayData(result.data.records)
            console.log(result)
        }
        fetchData()
    }, [])



    const essay: API.Essay = {
        content: "可是啊总有那风吹不散的认真，总有大雨也不能抹去的泪痕",
        creatTime: "2022",
        mood: 'normal', open: true,
        updateTime: "2022-2",
        urls: ["https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
            "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
            "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
            "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
        ]
    }

    return (
        <>
            <div className={styles.topInfo}>

            </div>
            <Row justify={"center"}>
                <Col xs={23} sm={23} md={12} lg={12} xl={12}>
                    <div className={styles.essayST}>
                        {essayData?.map((item)=>{
                            return(
                                <>
                                <Jotting essay={item} key={item.id}/>
                                 {/!*<Divider plain/>*!/}
                                </>
                            )
                        })}
                    </div>
                </Col>
                <Col xs={0} sm={0} md={7} lg={7} xl={7}>
                    <Affix offsetTop={100}>
                    <div className={styles.author}>
                    <Author/>
                    </div>
                    </Affix>
                </Col>
            </Row>
        </>
    );
};

export default Life;
*/
