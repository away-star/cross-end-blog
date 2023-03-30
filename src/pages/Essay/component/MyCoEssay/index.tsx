import React from 'react';
import styles from './index.less';
import {Column} from "rc-table";
import {Image, Row} from "antd";
import happySvg from '@/assets/happy.svg';
import ImageLayout from "@/pages/Essay/component/ImageLayout";


interface IProps {
   time?: Date
}

const images = [
    'https://staraway.love/blog/authorAvatar.jpg',
    'https://staraway.love/blog/authorAvatar.jpg', // ...
    'https://staraway.love/blog/authorAvatar.jpg', // ...
    'https://staraway.love/blog/authorAvatar.jpg', // ...
    'https://staraway.love/blog/authorAvatar.jpg', // ...
    'https://staraway.love/blog/authorAvatar.jpg', // ...
];

// 脚手架示例组件
const MyCoEssay: React.FC<IProps> = (props) => {
    const {time} = props;
    return (
       <div className={styles.container}>
           <Row style={{minHeight:150}}>
           <div className={styles.saying}>
               如果大海能够，带走我的忧愁
           </div>
           <div className={styles.ikon}><img src={happySvg} alt={''} width={80} height={80}/></div>
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
           <ImageLayout images={images} />
       </div>
    );
};

export default MyCoEssay;
