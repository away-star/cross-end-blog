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
import {writeEssay} from "@/services/api";
import PostBtn from "@/components/btn/PostBtn";
import {useModel,history} from "umi";
import {write} from "@/services/api/create";


const formItemLayout = {
    labelCol: {span: 6},
    wrapperCol: {span: 6},
};


export default () => {
    const [modalVisit, setModalVisit] = useState(false);
    const {initialData} = useModel('initialModel', (model) => ({
        initialData: model.initialData,
    }));

    const {writeData} = useModel('writeModel', (model) => ({
        writeData: model.writeData,
    }));

    const [cover, setCover] = useState<string>();

    const onUploadSuccess = (fileUrls: string[]) => {
        setCover(fileUrls[0]);
        console.log(fileUrls)
    }

    const selectOptions = initialData?.userInfo?.labelVenue?.map((item) => {
                return {label: item, value: item}
            }
        )
    ;


    return (
        <>
            <ModalForm
                layout={'horizontal'}
                {...formItemLayout}
                title="确认发布"
                open={modalVisit}
                onFinish={async (values) => {
                    if (cover === undefined) {
                        message.error('请上传封面')
                        return false
                    }
                    if (values.description === undefined) {
                        message.error('请填写简介')
                        return false
                    }
                    const post: CreatAPI.writeData = {
                        description: values.description,
                        category: values.category,
                        content: writeData.content,
                        coverUrl: cover,
                        open: values.open,
                        title: writeData.title
                    }
                    const res = await write(post)
                    if (res.code === 200) {
                        message.success('发布成功')
                        setModalVisit(false)
                        setTimeout(()=>{
                            history.back()
                        },1000)
                    }else if (res.code===-1){
                        message.error(res.msg)
                        setTimeout(()=>{
                            history.push('/checkin')
                        },1000)

                    }

                }}
                onOpenChange={setModalVisit}
                trigger={
                    <PostBtn text={'发布'} onclick={() => {
                        if (writeData.content === undefined || writeData.content === '') {
                            message.error('请先写文章')
                        } else if (writeData.title === undefined || writeData.title === '') {
                            message.error('请先写标题')
                        } else {
                            setModalVisit(true)
                        }
                    }
                    }/>
                }
            >
                <ProFormSelect
                    name="category"
                    label="category"
                    request={async () => selectOptions ?? []}
                    placeholder="Please select a category"
                    initialValue={selectOptions?.[0].value}
                    // rules={[{ required: true, message: 'Please select your mood!' }]}
                />
                <ProFormTextArea
                    name="description"
                    label="description"
                    placeholder="写简介！写简介！写简介！重要的事情说三遍！"
                    wrapperCol={{span: 12}}
                    fieldProps={{autoSize: {minRows: 3, maxRows: 10}}}
                />
                <ProForm.Item label="cover" name="cover" wrapperCol={{span: 13}}>
                    {/*<MyUpload  onUploadSuccess={()=>{console.log('666')}}/>*/}
                    <MyUpload onUploadSuccess={onUploadSuccess} type={'picture-card'} multi={false}/>
                </ProForm.Item>
                <ProFormSwitch label={'isPublic'} name={'open'} initialValue={true}/>
            </ModalForm>
        </>
    );
};
