import {PlusOutlined} from '@ant-design/icons';
import {
    DrawerForm,
    ModalForm,
    ProForm,
    ProFormDateRangePicker,
    ProFormSelect,
    ProFormText, ProFormTextArea,
} from '@ant-design/pro-components';
import {Button, Form, message, RadioChangeEvent, Select, Space, TreeSelect} from 'antd';
import React, {useState} from 'react';
import {SelectCommonPlacement} from "antd/es/_util/motion";
import {ProFormSwitch} from "@ant-design/pro-form";
import GoTo from "@/components/btn/GoTo";
import MyUpload from "@/components/MyUpload";
import {getEssays, writeEssay} from "@/services/api";


const formItemLayout = {
    labelCol: {span: 6},
    wrapperCol: {span: 6},
};

const verify = (values: any) => {

}


export default () => {
    const [modalVisit, setModalVisit] = useState(false);

    const [placement, SetPlacement] = useState<SelectCommonPlacement>('topLeft');

    const [images, setImages] = useState<string[]>([]);

    const placementChange = (e: RadioChangeEvent) => {
        SetPlacement(e.target.value);
    };

    const onUploadSuccess = (fileUrls: string[]) => {
        setImages(fileUrls);
    }

    return (
        <>
            <ModalForm
                layout={'horizontal'}
                {...formItemLayout}
                title="记录随笔"
                open={modalVisit}
                onFinish={async (values) => {
                    if (values.mood === undefined || values.content === undefined) {
                        message.error('请填写完整');
                        return false;
                    }
                    const essay: API.Essay = {
                        content: values.content, mood: values.mood, open: values.open, urls: images
                    }
                    const response = await writeEssay(essay);

                    message.success('提交成功');
                    return true;
                }}
                onOpenChange={setModalVisit}
                trigger={
                    <GoTo text={'记录随笔'} onclick={() => setModalVisit(true)}/>
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
                    placeholder="写下今日心情吧！"
                    wrapperCol={{span: 12}}
                    fieldProps={{autoSize: {minRows: 3, maxRows: 10}}}
                />
                <ProForm.Item label="图片" name="file" wrapperCol={{span: 13}}>
                    {/*<MyUpload  onUploadSuccess={()=>{console.log('666')}}/>*/}
                    <MyUpload onUploadSuccess={onUploadSuccess} type={'picture-card'}/>
                </ProForm.Item>
                <ProFormSwitch label={'isPublic'} name={'open'} initialValue={true}/>
            </ModalForm>
        </>
    );
};
