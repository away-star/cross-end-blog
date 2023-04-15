import React from 'react';
import {Row, Col, Space, Image} from 'antd';
import styles from './index.less';

interface ImageLayoutProps {
    images: string[]; // 图片数组
}

const ImageLayout: React.FC<ImageLayoutProps> = ({images}) => {
    // 判断图片数量，决定布局方式
    let layout: number[];
    switch (images.length) {
        case 1:
            layout = [24];
            break;
        case 2:
            layout = [12, 12];
            break;
        case 3:
            layout = [8, 8, 8];
            break;
        case 4:
            layout = [12, 12, 12, 12];
            break;
        case 5:
            layout = [8, 8, 8, 8, 8];
            break;
        case 6:
            layout = [8, 8, 8, 8, 8, 8];
            break;
        case 7:
            layout = [8, 8, 8, 8, 8, 8, 8];
            break;
        case 8:
            layout = [8, 8, 8, 8, 8, 8, 8, 8];
            break;
        case 9:
            layout = [8, 8, 8, 8, 8, 8, 8, 8, 8];
            break;
        default:
            layout = [8, 8, 8, 6, 8, 8, 8, 8, 8];
    }

    return (
        <Row>
            {images.map((image, index) => (
                <Col key={index} span={layout[index]} style={{ margin: "4px 0" }}>
                    <Image src={image} style={{borderRadius:4,marginRight:1}} width={'100%'} />
                </Col>
            ))}
        </Row>
    );
};

export default ImageLayout;
