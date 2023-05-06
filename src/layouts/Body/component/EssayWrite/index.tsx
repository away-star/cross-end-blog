import {
    ModalForm,
    ProForm,
    ProFormSelect,
    ProFormTextArea,
} from '@ant-design/pro-components';
import {message} from 'antd';
import React, {useState} from 'react';
import {ProFormSwitch} from "@ant-design/pro-form";
import MyUpload from "@/components/MyUpload";
import {writeEssay} from "@/services/api/create";
import {useModel} from "@@/exports";


const formItemLayout = {
    labelCol: {span: 6},
    wrapperCol: {span: 6},
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
        console.log(fileUrls)
    }


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
                    const essay: CreatAPI.essayData = {
                        content: values.content, mood: values.mood, open: values.open, urls: images
                    }
                    const response = await writeEssay(essay);
                    console.log(response)
                    if (response.code === 200) {
                        message.success('提交成功');
                        window.location.reload();
                        return true;
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
                <ProForm.Item label="图片" name="file" wrapperCol={{span: 13}}>
                    {/*<MyUpload  onUploadSuccess={()=>{console.log('666')}}/>*/}
                    <MyUpload onUploadSuccess={onUploadSuccess} type={'picture-card'} maxCount={9}/>
                </ProForm.Item>
                <ProFormSwitch label={'isPublic'} name={'open'} initialValue={true}/>
            </ModalForm>
        </>
    );
};
