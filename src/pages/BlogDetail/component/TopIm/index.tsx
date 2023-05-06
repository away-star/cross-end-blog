import React from 'react';
import styles from './index.less';
import {CommentOutlined, LikeOutlined, ScanOutlined} from "@ant-design/icons";
import Back from "@/components/btn/Back";
import {Affix} from "antd";
import {history} from "umi";
import backgroundImg from "@/assets/backgroundImg.jpeg";
import {useModel} from "@@/exports";

interface IProps {
    like: number;
    title: string;
    view: number;
}



const TopIm: React.FC<IProps> = (props) => {
    const {getLoginInformationId} = useModel('initialModel', (model) => ({
        getLoginInformationId: model.getLoginInformationId
    }));


    const {like, title, view} = props;
    return (
        <div className={styles.topOut} style={{backgroundImage: `url(${backgroundImg})`}}>
            <div className={styles.back}>
                <Affix offsetTop={60}>
                    <Back text={'返回'} onClick={() => {
                        history.push(`/blog/${getLoginInformationId()}/home`)
                    }
                    }/>
                </Affix>
            </div>

            <h3>
                {title}
            </h3>
            <p>
                <span><LikeOutlined style={{marginRight: 1}}/>{like}</span>
                <span><ScanOutlined style={{marginRight: 1}}/>{view}</span>
                <span><CommentOutlined style={{marginRight: 1}}/>{view}</span>
            </p>
        </div>
    );
};

export default TopIm;
