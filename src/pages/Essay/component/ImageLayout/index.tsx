import React from 'react';
import { Image } from 'antd';
import styles from './index.less';

const Layout1: React.FC<{ images: string[] }> = ({ images }) => {
    // 显示一张大图
    return (
        <div className={styles['layout-1']}>
            <Image src={images[0]} />
        </div>
    );
};

const Layout2: React.FC<{ images: string[] }> = ({ images }) => {
    // 显示三张均匀分布的图
    return (
        <div className={styles['layout-2']}>
            {images.map((image, index) => (
                <div key={index} className={styles['image-item']}>
                    <Image src={image} />
                </div>
            ))}
        </div>
    );
};

const Layout3: React.FC<{ images: string[] }> = ({ images }) => {
    // 显示九张九宫格布局的图
    return (
        <div className={styles['layout-3']}>
            {images.map((image, index) => (
                <div key={index} className={styles['image-item']}>
                    <Image src={image} />
                </div>
            ))}
        </div>
    );
};

const getLayout = (images: string[]) => {
    const length = images.length;

    if (length === 1) {
        return <Layout1 images={images} />;
    } else if (length >= 2 && length <= 4) {
        return <Layout2 images={images} />;
    } else if (length >= 5 && length <= 9) {
        return <Layout3 images={images} />;
    }
};

const ImageLayout: React.FC<{ images: string[] }> = ({ images }) => {
    return <div className={styles['image-layout']}>{getLayout(images)}</div>;
};

export default ImageLayout;
