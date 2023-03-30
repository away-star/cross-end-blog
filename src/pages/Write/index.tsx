import React from "react";
import {Affix, Col, Input, Row} from "antd";
import MdEditor from "@/pages/Write/component/MdEditor";
import styles from './index.less';
import MyCacader from "@/pages/Write/component/MyCacader";
import PostBtn from "@/components/btn/PostBtn";
import Back from "@/components/btn/Back";
import {history} from "umi";


const Write: React.FC = () => {

  return (
      <>
          <Affix offsetTop={10}>
          <div className={styles.back}> <Back onClick={history.back} text={'back'}/></div></Affix>
          <Row justify={"space-around"} className={styles.top}>
              <Col span={10}>
                  <Input placeholder="标题"  showCount style={{height:50,borderRadius:20}}/>
              </Col>
              <Col span={3} style={{marginTop:10}}><MyCacader/></Col>
              <Col span={3}><PostBtn onclick={console.log('66')} text={'发布'}/></Col>
          </Row>
          <MdEditor/>
      </>
  );
};

export default Write;
