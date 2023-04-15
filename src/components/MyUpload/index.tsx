import React, {useEffect, useState} from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {message, Modal, Upload} from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import ImgCrop from "antd-img-crop";

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};


interface IProps {
    type?: "picture-circle" | "picture-card";//如果type不传，默认为picture-card
    accept?: string[];//默认为image/*,即只能上传图片
    multi?: boolean;//是否可以上传多个  默认为false
    defaultPictureUrl?: string//默认的初始图片
    onUploadSuccess: (url:string[]) => void

}

const MyUpload: React.FC<IProps> = (props) => {
    const {type, multi=true, accept, defaultPictureUrl, onUploadSuccess} = props;
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    useEffect(() => {
        if (defaultPictureUrl !== undefined) {
            setFileList([{
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: defaultPictureUrl,
            },])
        }
    }, [])

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>{
        setFileList(newFileList);
        //console.log(newFileList)
        //console.log(fileList)
        console.log(newFileList[0])
        if (newFileList[newFileList.length-1]?.status==='done'){
            onUploadSuccess(newFileList.map((item)=> (item)?.response?.message))
        }
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <>
            {/*<Upload*/}
            {/*    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"*/}
            {/*    listType="picture-card"*/}
            {/*    fileList={fileList}*/}
            {/*    onPreview={handlePreview}*/}
            {/*    onChange={handleChange}*/}
            {/*>*/}
            {/*    {fileList.length >= 8 ? null : uploadButton}*/}
            {/*</Upload>*/}
            {/*<Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>*/}
            {/*    <img alt="example" style={{ width: '100%' }} src={previewImage} />*/}
            {/*</Modal>*/}


            <ImgCrop rotationSlider cropShape={type==='picture-card'?'rect':'round'} aspect={1}>
                <Upload
                    action="http://localhost:8088/source/upload"
                    listType={type==='picture-card'?'picture-card':'picture-circle'}
                    fileList={fileList}
                    onChange={handleChange}
                    onPreview={handlePreview}
                    // beforeUpload={beforeUpload}
                >
                    {/*{fileList.length < (multi?9:1) && uploadButton}*/}
                    {fileList.length >= (multi?9:1) ? null : uploadButton}
                </Upload>
            </ImgCrop>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    );
};

export default MyUpload;
