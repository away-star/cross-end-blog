import {Col, Row, Image, Space} from "antd";
import React, {useEffect, useState} from "react";
import styles from './index.less'

import classNames from "classnames";
import {useModel} from "@@/exports";
import {DEFAULT_AVATAR} from "@/constants";
import Nav from "@/layouts/HeaderNav/component/Nav";
import MySearch from "@/components/mySearch";

const HeaderNav: React.FC = () => {
    const {initialUserData, setInitialUserData, fetchInitialUserData} = useModel('initialModel', (model) => ({
        setInitialUserData: model.setInitialUserData,
        initialUserData: model.initialUserData,
        fetchInitialUserData: model.fetchInitialUserData
    }));


    const {userinfo, securityInfo, labels, proverbs} = initialUserData!


    const [isUp, setIsUp] = useState<boolean>(true)
    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (event.deltaY > 0) {
                setIsUp(false);
            } else {
                setIsUp(true);
            }
        };
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (

        <Row justify={"space-between"} className={classNames(styles.row, isUp ? styles.slideIn : styles.slideOut)}>
            <Col xs={0} sm={0} md={8} lg={8} xl={8} className={styles.starBlog}>
                <div className={styles.slog}>
                    <Image
                        preview={false}
                        width={40}
                        style={{borderRadius: 50}}
                        src={userinfo?.avatar ?? DEFAULT_AVATAR}
                    />
                    <span> {userinfo?.nickname}的博客 </span>
                </div>
            </Col>
            <Col xs={24} sm={24} md={13} lg={13} xl={13}>
                <Space>
                <MySearch text={" "}/><Nav text={"ss"}/>
                </Space>
                {/*<Nav text={"ss"}/>*/}
            </Col>
        </Row>
    )
}


export default HeaderNav;
