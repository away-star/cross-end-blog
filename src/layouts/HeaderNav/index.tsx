import {Col, Row, Image} from "antd";
import React, {useEffect, useState} from "react";
import styles from './index.less'
import {AUTHOR_AVATAR} from "@/constants";
import Nav from "@/layouts/HeaderNav/component/Nav";
import classNames from "classnames";
import {useModel} from "@umijs/max";


const HeaderNav: React.FC = () => {
    const {scrollPosition, changeDistanc} = useModel('scroll');

    const [isUp, setIsUp] = useState(false)

    useEffect(() => {
        // 可以在这里设置下滑多少才会渐入渐出
       if (changeDistanc >= 0 && scrollPosition > 100)
            setIsUp(false)
        else
            setIsUp(true)
    }, [changeDistanc, scrollPosition])

    return (
        <Row justify={"space-between"} className={classNames(styles.row, isUp ? styles.slideIn : styles.slideOut)}>
            <Col xs={0} sm={0} md={8} lg={8} xl={8} className={styles.starBlog}>
                <div className={styles.slog}>
                    <Image
                        width={40}
                        style={{borderRadius: 50}}
                        src={AUTHOR_AVATAR}
                    />
                    <span> 小星的博客 </span>
                </div>
            </Col>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <Nav/>
            </Col>
        </Row>
    )
}


export default HeaderNav;
