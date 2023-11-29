import {ModalForm, ProFormSelect, ProFormTextArea, ProFormUploadButton,} from '@ant-design/pro-components';
import {message} from 'antd';
import React, {useState} from 'react';
import {ProFormSwitch} from "@ant-design/pro-form";
import {history, useModel} from "@@/exports";
import {saveEssay} from "../../../../../services/content/api/essayController";
import {UploadFile} from "antd/es/upload/interface";
import {RcFile, UploadChangeParam} from "antd/es/upload";


const formItemLayout = {
    labelCol: {span: 6},
    wrapperCol: {span: 12},
};


export default () => {
    const [modalVisit, setModalVisit] = useState(false);

    const {
        isOwner
    } = useModel('initialModel', (model) => ({
        isOwner: model.isOwner,
    }));


    const [images, setImages] = useState<string[]>([]);

    const onUploadSuccess = (fileUrls: string[]) => {
        setImages(fileUrls);
    }

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const handleUploadChange = ({file}: UploadChangeParam) => {
        if (file.status === 'done') {
            console.log(file.response.code)
            if (file.response.code === -10006) {
                message.error(file.response.msg).then(r => {
                    history.push('/checkin');   // 跳转到登录页
                })
            }
            file.url = file.response.data;
        }

    };


    return (
        <>
            <ModalForm
                layout={'horizontal'}
                {...formItemLayout}
                title="记录随笔"
                open={modalVisit}
                onFinish={async (values) => {
                    if (!isOwner()) {
                        message.error('You are not the owner of this blog, you cannot write an essay')
                        return true;
                    }
                    if (values.mood === undefined || values.content === undefined) {
                        message.error('请填写完整');
                        return false;
                    }
                    const essay: ContentAPI.EssayRequest = {
                        content: values.content,
                        mood: values.mood,
                        publicFlag: values.publicFlag,
                        coverUrls: values.covers.map((cover: any) => cover.url),
                    }
                    const response = await saveEssay(essay);
                    if (response.code === 200) {
                        message.success('提交成功',0.5).then(r => {
                            window.location.reload();
                            return true;
                        });
                    } else {
                        message.error('提交失败');
                        return false;
                    }
                }}
                onOpenChange={setModalVisit}
                trigger={
                    <span>Record an essay</span>
                }
            >
                <ProFormSelect
                    name="mood"
                    label="今日心情"
                    request={async () => [
                        {label: 'sad', value: 'sad'},
                        {label: 'happy', value: 'happy'},
                        {label: 'tired', value: 'tired'},
                        {label: 'enrich', value: 'enrich'},
                    ]}
                    placeholder="Please select a mood"
                    // rules={[{ required: true, message: 'Please select your mood!' }]}
                />
                <ProFormTextArea
                    name="content"
                    label="随笔内容"
                    placeholder="用文字写下今日心情吧！"
                    wrapperCol={{span: 12}}
                    fieldProps={{autoSize: {minRows: 3, maxRows: 10}}}
                />
                {/*<ProForm.Item label="图片" name="file" wrapperCol={{span: 13}}>*/}
                {/*    /!*<MyUpload  onUploadSuccess={()=>{('666')}}/>*!/*/}
                {/*    <MyUpload onUploadSuccess={onUploadSuccess} type={'picture-card'} maxCount={9}/>*/}
                {/*</ProForm.Item>*/}
                <ProFormUploadButton
                    name="covers"
                    label="图片"
                    max={9}
                    fieldProps={{
                        name: 'file',
                        listType: 'picture-card',
                        headers: {'Authorization': localStorage.getItem('Authorization')!},
                        onPreview: onPreview,
                        onChange: handleUploadChange,
                    }}
                    action='/source/image/upload'
                />
                <ProFormSwitch label={'isPublic'} name={'publicFlag'} initialValue={true}/>
            </ModalForm>
        </>
    );
};
