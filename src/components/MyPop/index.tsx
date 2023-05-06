import React from 'react';
import {Modal} from "antd";

interface IProp {
    visible: boolean;
}

// 脚手架示例组件
const MyPop: React.FC<IProp> = (props) => {
    const {visible} = props;
    return (
        <Modal
            centered={true}
            maskStyle={{background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(4px)'}}
            open={visible}
            cancelButtonProps={{style: {display: 'none'}}}
            okButtonProps={{style: {display: 'none'}}}
            closable={false}
            keyboard={false}
            maskClosable={false}
        >
            <p>检测到您正在使用手机设备进行blog体验</p>
            <p>flutter小屏端正在加急开发中，敬请期待。。。</p>
        </Modal>
    );
};

export default MyPop;
