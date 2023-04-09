import React from 'react';
import { Image } from 'antd';
import styles from './index.less';

interface Props {
    images: string[]; // 图片链接数组
}

// 九宫格图片展示组件
const NineImage: React.FC<Props> = ({ images }) => {
    const len = images.length;
    let renderImages = null;

    if (len === 1) { // 只有一张图片时
        renderImages = (
            <div className={styles.one}>
                <Image src={images[0]}  />
            </div>
        );
    } else if (len === 2 || len === 4) { // 两张或四张图片时
        const imageArr = images.map((item, index) => (
            <Image key={index} src={item} preview={false}/>
        ));

        renderImages = <div className={styles.twofour}>{imageArr}</div>;
    } else { // 其余情况
        const rowCount = len <= 3 ? 1 : len <= 6 ? 2 : 3; // 行数
        const cellCount = len <= 3 ? len : len <= 6 ? 3 : 6; // 每行展示的图片数量
        const imageArr: React.ReactNode[] = [];

        for (let i = 0; i < rowCount; i++) {
            const lineArr: React.ReactNode[] = [];
            for (let j = 0; j < cellCount; j++) {
                const index = i * cellCount + j;
                if (index >= len) {
                    lineArr.push(<div key={j} className={styles.cell} style={{ visibility: 'hidden' }}></div>);
                    continue;
                }
                lineArr.push(<Image key={j} className={styles.cellImg} src={images[index]} preview={false} />);
            }
            imageArr.push(<div key={i} className={styles.row}>{lineArr}</div>);
        }

        renderImages = <div className={styles.other}>{imageArr}</div>;
    }

    return <div className={styles.nine}>{renderImages}</div>;
};

export default NineImage;
