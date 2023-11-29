import React from "react";
import {Affix, Col, Input, Row} from "antd";
import styles from './index.less';
import Back from "@/components/btn/Back";
import {history} from "umi";
import {useModel} from "umi";
import Release from "@/pages/Write/component/Release";
import ParticleBackground from "@/components/ParticleBackground";
import MDRt from "@/pages/Write/component/MDRt";


const Write: React.FC = () => {
    const {postWriteData, setPostWriteData} = useModel('writeModel', (model) => ({
        postWriteData: model.postWriteData,
        setPostWriteData: model.setPostWriteData,
    }));

    const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostWriteData({...postWriteData, title: e.target.value})
    }

    return (
        <>
            <ParticleBackground/>
            <Affix offsetTop={10}>
                <div className={styles.back}><Back onClick={history.back} text={'back'}/>
                </div>
            </Affix>

            <div className={styles.top}>
                <Row justify={"space-between"}>
                    <Col span={13}>
                        <Input placeholder="标题" showCount style={{height: 50, borderRadius: 20}}
                               onChange={titleChange}/>
                    </Col>
                    <Col span={3}>
                        <Release/>
                    </Col>
                </Row>
            </div>
            {/*<MdEditor/>*/}
            <MDRt/>
        </>
    );
};
export default Write;
