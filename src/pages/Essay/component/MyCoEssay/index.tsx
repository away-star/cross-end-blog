import React from 'react';
import styles from './index.less';
import {Column} from "rc-table";
import {Image, Row} from "antd";
import happySvg from '@/assets/happy.svg';
import tiredSvg from '@/assets/studying.svg';
import enrichSvg from '@/assets/success.svg';
import sadSvg from '@/assets/working.svg';
import ImageLayout from "@/pages/Essay/component/ImageLayout";


interface IProps {
   content: string;
   urls: string[];
   mood: string;
}


const getMood = (mood: string) => {
    switch (mood) {
        case 'happy':
            return happySvg;
        case 'sad':
            return sadSvg;
        case 'tired':
            return tiredSvg;
        case 'enrich':
            return enrichSvg;
        default:
            return happySvg;
    }
}

// 脚手架示例组件
const MyCoEssay: React.FC<IProps> = (props) => {
    const {content, urls, mood} = props;
    return (
       <div className={styles.container}>
           <Row style={{minHeight:150}}>
           <div className={styles.saying}>
               {content}
           </div>
           <div className={styles.ikon}><img src={getMood(mood)} alt={''} width={80} height={80}/></div>
           </Row>
           {/*<div>*/}
           {/*<Image.PreviewGroup*/}
           {/*    preview={{*/}
           {/*        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),*/}
           {/*    }}*/}
           {/*>*/}
           {/*    <Image className={styles.img} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />*/}
           {/*    <Image*/}
           {/*        width={100}*/}
           {/*        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"*/}
           {/*    />*/}
           {/*</Image.PreviewGroup>*/}
           {/*</div>*/}
           <ImageLayout images={urls} />
       </div>
    );
};

export default MyCoEssay;
