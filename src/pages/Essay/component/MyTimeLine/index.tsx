import React from 'react';
import './index.less';
import {Timeline} from "antd";
import MyLabel from "@/pages/Essay/component/MyLabel";
import MyCoEssay from "@/pages/Essay/component/MyCoEssay";
import {AlertTwoTone, FullscreenExitOutlined, GoldTwoTone, PieChartTwoTone, SmileOutlined} from "@ant-design/icons";


interface IProps {

}

// 脚手架示例组件
const MyTimeLine: React.FC<IProps> = () => {

    return (
        <Timeline
            //className={styles.line}
            mode={'left'}
            items={[
                {
                    color:"red",
                    label: <MyLabel/>,
                    children: <MyCoEssay/>,
                    //dot: <SmileOutlined />,
                },
                {
                    //dot:<FullscreenExitOutlined />,
                    label: <MyLabel/>,
                    children:<MyCoEssay/>
                },
                {
                    //dot:<AlertTwoTone  style={{backgroundColor:"transparent"}}/>,
                    label: <MyLabel/>,
                    children: <MyCoEssay/>,
                },
                {
                   // dot:<GoldTwoTone />,
                    label: <MyLabel/>,
                    children:<MyCoEssay/>
                },
            ]}
        />
    );
};

export default MyTimeLine;
