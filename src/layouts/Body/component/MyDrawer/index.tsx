import {PlusOutlined} from '@ant-design/icons';
import {
    DrawerForm,
    ModalForm,
    ProForm,
    ProFormDateRangePicker,
    ProFormSelect,
    ProFormText,
} from '@ant-design/pro-components';
import {Affix, Button, Card, Col, Divider, message, Space} from 'antd';
import {useState} from 'react';
import MySide from "@/components/btn/MySide";
import styles from './index.less';
import SelectCard from "@/layouts/Body/component/SelectCard";
import ThreeD from "@/components/btn/ThreeD";
import GoTo from "@/components/btn/GoTo";
import Phamtom from "@/components/btn/Phamtom";
import {history} from "umi";

export default () => {
    const [drawerVisit, setDrawerVisit] = useState(false);
    return (
        <>
            <Affix offsetTop={40}>
                <div className={styles.side}><MySide text={'menu'} onClick={() => setDrawerVisit(true)}/></div>
            </Affix>
            <DrawerForm
                onOpenChange={setDrawerVisit}
                title="控制室"
                width={540}
                submitter={false}
                open={drawerVisit}
            >
                <Card title="创作中心:" bordered={false} style={{width: 500}}>
                    <Col>
                        {/*<ThreeD text={"to write post"}/>*/}
                        {/*<ThreeD text={"to write trifles"}/>*/}
                        <div className={styles.blogBut}>
                        <Phamtom text={'写一篇博客'} onclick={()=>{
                            history.push('/write')}
                        }/>
                        </div>
                        <GoTo text={"记录一次随笔"}/>
                    </Col>
                </Card>
                <Divider plain={false}/>
                <Card title="配置中心:" bordered={false} style={{width: 500}}>
                    <p>修改主题配置</p>
                    <p>修改个人信息</p>
                </Card>
            </DrawerForm>
        </>
    );
};
