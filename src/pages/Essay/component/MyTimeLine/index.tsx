import React from 'react';
import './index.less';
import {Timeline} from "antd";
import MyLabel from "@/pages/Essay/component/MyLabel";
import MyCoEssay from "@/pages/Essay/component/MyCoEssay";
import {AlertTwoTone, FullscreenExitOutlined, GoldTwoTone, PieChartTwoTone, SmileOutlined} from "@ant-design/icons";


interface IProps {
    essay: API.Essay[];
}

// 脚手架示例组件
const MyTimeLine: React.FC<IProps> = (props) => {
    const {essay} = props;
    return (
        <Timeline
            //className={styles.line}
            mode={'left'}
            // items={[
            //     {
            //         color:"red",
            //         label: <MyLabel/>,
            //         children: <MyCoEssay/>,
            //         //dot: <SmileOutlined />,
            //     },
            //     {
            //         //dot:<FullscreenExitOutlined />,
            //         label: <MyLabel/>,
            //         children:<MyCoEssay/>
            //     },
            //     {
            //         //dot:<AlertTwoTone  style={{backgroundColor:"transparent"}}/>,
            //         label: <MyLabel/>,
            //         children: <MyCoEssay/>,
            //     },
            //     {
            //        // dot:<GoldTwoTone />,
            //         label: <MyLabel/>,
            //         children:<MyCoEssay/>
            //     },
            // ]}
            items={essay.map((item) => ({
                label: <MyLabel time={item.createTime}/>,
                children: <MyCoEssay content={item.content} mood={item.mood} urls={item.urls}/>,
            }))}
        />
    );
};

export default MyTimeLine;
