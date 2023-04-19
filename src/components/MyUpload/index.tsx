import React, {useEffect, useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {message, Modal, Upload} from 'antd';
import type {RcFile, UploadProps} from 'antd/es/upload';
import type {UploadFile} from 'antd/es/upload/interface';
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
    // multi?: boolean;//是否可以上传多个  默认为false
    maxCount?: number//最大上传数量,默认为1
    defaultPictureUrl?: string[] | undefined//默认的初始图片
    onUploadSuccess: (url: string[]) => void
    aspect?: number//裁剪比例
}

const MyUpload: React.FC<IProps> = (props) => {
    const {type, maxCount = 1, accept, defaultPictureUrl, onUploadSuccess, aspect = 1} = props;
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    useEffect(() => {
        if (defaultPictureUrl !== undefined && defaultPictureUrl !== null) {
            // setFileList([{
            //     uid: '-1',
            //     name: 'image.png',
            //     status: 'done',
            //     url: defaultPictureUrl,
            // },])
            setFileList(defaultPictureUrl.map((item, index) => ({
                uid: index.toString(),
                name: 'image.png' + index.toString(),
                status: 'done',
                url: item,
            })))
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

    const handleChange: UploadProps['onChange'] = ({fileList: newFileList}) => {

        setFileList(newFileList);
        console.log(newFileList)
        console.log(fileList)
        if (newFileList[newFileList.length - 1]?.status === 'done') {
            console.log('download success')
            if (newFileList.length > fileList.length) {
                newFileList[newFileList.length - 1] = {
                    uid: fileList.length.toString(),
                    name: 'image.png' + fileList.length.toString().toString(),
                    status: 'done',
                    url: newFileList[newFileList.length - 1].response.message,
                }
            }
            console.log(newFileList)
            onUploadSuccess(newFileList.map((item) => {
                if (item.url) {
                    return item.url
                } else {
                    return item.response.message
                }
            }))
        }
    }

    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );
    return (
        <>
            <ImgCrop rotationSlider cropShape={type === 'picture-card' ? 'rect' : 'round'} aspect={aspect}>
                <Upload
                    action="http://localhost:8088/source/upload"
                    listType={type === 'picture-card' ? 'picture-card' : 'picture-circle'}
                    fileList={fileList}
                    onChange={handleChange}
                    onPreview={handlePreview}
                    // beforeUpload={beforeUpload}
                >
                    {/*{fileList.length < (multi?9:1) && uploadButton}*/}
                    {fileList.length >= maxCount ? null : uploadButton}
                </Upload>
            </ImgCrop>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{width: '100%'}} src={previewImage}/>
            </Modal>
        </>
    );
};

export default MyUpload;
