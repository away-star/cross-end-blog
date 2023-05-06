import {Col, Row, Image} from "antd";
import React, {useEffect, useState} from "react";
import styles from './index.less'
import {AUTHOR_AVATAR} from "@/constants";
import Nav from "@/layouts/HeaderNav/component/Nav";
import classNames from "classnames";
import {useModel} from "@@/exports";

const HeaderNav: React.FC = () => {
    const {initialData} = useModel('initialModel', (model) => ({
        initialData: model.initialData,
    }));
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
                        src={initialData.userInfo?.avatar??AUTHOR_AVATAR}
                    />
                    <span> {initialData.userInfo?.nickname}的博客 </span>
                </div>
            </Col>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <Nav/>
            </Col>
        </Row>
    )
}


export default HeaderNav;
