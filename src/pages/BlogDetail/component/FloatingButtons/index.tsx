import React, {useState} from "react";
import styles from './index.less';
import {
    ArrowUpOutlined,
    CommentOutlined,
    LikeFilled,
    LikeOutlined,
    ShareAltOutlined,
    StarOutlined
} from "@ant-design/icons";
import classNames from "classnames";
import {Divider} from "antd";

type ButtonProps = {
    icon: string;
    onClick: () => void;
    isActive?: boolean;
};

// 按钮组件
const Button = ({icon, onClick, isActive}: ButtonProps) => {
    return (
        <button className={`${styles.button} ${isActive ? styles.active : ""}`} onClick={onClick}>
            <i className={`iconfont ${icon}`}/>
        </button>
    );
};

// 悬浮按钮列组件
const FloatingButtons = () => {
    // 设置初始状态
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isCommentDisplayed, setIsCommentDisplayed] = useState(false);
    const [isArticleStarred, setIsArticleStarred] = useState(false);
    const [isLiked, setIsLiked] = useState(false);


    // 处理按钮的点击事件
    const handleVideoClick = () => {
        setIsVideoPlaying(!isVideoPlaying);
    };
    const handleCommentClick = () => {
        setIsCommentDisplayed(!isCommentDisplayed);
    };
    const handleShareClick = () => {
        alert("Share clicked");
    };
    const handleToTopClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className={styles.floatingButtons}>
            {isLiked ? <LikeFilled className={classNames(styles.button)} style={{color: "blanchedalmond", fontSize: 24}}
                                   onClick={() => {
                                       setIsLiked(!isLiked)
                                   }
                                   }/> :
                <LikeOutlined className={classNames(styles.button)} style={{color: "Window", fontSize: 24}}
                              onClick={() => {
                                  setIsLiked(!isLiked)
                              }}/>}
            <ShareAltOutlined className={classNames(styles.button)} style={{color: "blanchedalmond", fontSize: 24}}/>
            <CommentOutlined className={classNames(styles.button)} style={{color: "whitesmoke", fontSize: 24}}/>
            <Divider plain={true}/>
            <ArrowUpOutlined className={classNames(styles.button)} style={{color: "Window", fontSize: 24}}
                             onClick={handleToTopClick}/>
        </div>
    );
};

export default FloatingButtons;
