import {
    ProForm,
    ProFormGroup,
    ProFormList,
    ProFormText,
    ProFormTextArea
} from '@ant-design/pro-components';
import React from 'react';
import MyUpload from "@/components/MyUpload";
import {message} from "antd";
import {history} from "umi";


interface IProp {
    labels: UserSecurityAPI.Label[] | undefined;
    proverbs: UserSecurityAPI.Proverb[] | undefined;
    slideVenue: string[];
}



const BlogSetting: React.FC<IProp> = (props) => {
    const {labels, proverbs, slideVenue} = props;
    const [slideShow, setSlideShow] = React.useState<string[]>(slideVenue?.map((item, index) => {
        return item;
    }));


    const onAvatarUploadSuccess = (fileUrls: string[]) => {
        setSlideShow(fileUrls);
    }

    const upFinish = async (e: Record<string, any>) => {
        // const blogSettingData: UserCenterAPI.Label = {
        //     labels: e.labels,
        //     proverbs: e.proverbs,
        //     slides: slideShow
        // }
        // (blogSettingData);
        // const res=await updateBlogSetting(blogSettingData)
        // if (res.code === 200) {
        //     message.success("更新成功！")
        //     history.push('/')
        // }else{
        //     message.error("更新失败！")
        // }
    }


    return (
        <ProForm onFinish={upFinish}>
            <ProFormList
                name="labels"
                label="博客文章标签管理"
                rules={[
                    {
                        required: true,
                        validator: async (_, value) => {

                            if (value && value.length > 0) {
                                return;
                            }
                            throw new Error('至少要有一项！');
                        },
                    },
                ]}
                initialValue={labels?.map((item, index) => {
                    return {
                        title: item.title,
                        subTitle: item.subTitle,
                        id: item.id
                    }
                })}
            >
                <ProFormGroup key="group">
                    <ProFormText
                        name="title"
                        label="标签标题"
                        // wrapperCol={{span: }}
                        // placeholder="title"
                        //initialValue={initialData.userInfo?.nickname}
                        //rules={[{required: true, message: '请输入昵称'}]}
                    />
                    <ProFormTextArea
                        name="subTitle"
                        label="标签页描述"
                        width={'md'}
                        // wrapperCol={{span: 19}}
                        fieldProps={{
                            autoSize: {minRows: 3, maxRows: 5},
                            showCount: true,
                            maxLength: 100,
                            allowClear: true
                        }}
                        //placeholder="标签页描述"
                        //initialValue={initialData.userInfo?.nickname}
                        //rules={[{required: true, message: '请输入昵称'}]}
                    />
                </ProFormGroup>
            </ProFormList>
            <ProFormList
                name="proverbs"
                label="首页语录管理"
                initialValue={proverbs?.map((item, index) => {
                        return {
                            context: item.context,
                            id: item.id
                        }
                    }
                )
                }
                rules={[
                    {
                        required: true,
                        validator: async (_, value) => {
                            if (value && value.length > 0) {
                                return;
                            }
                            throw new Error('至少要有一项！');
                        },
                    },
                ]}
            >
                <ProFormTextArea
                    name="context"
                    width={'md'}
                    // wrapperCol={{span: 19}}
                    fieldProps={{
                        autoSize: {minRows: 3, maxRows: 5},
                        showCount: true,
                        maxLength: 100,
                        allowClear: true
                    }}
                    required={true}
                    // placeholder="标签页描述"
                    //rules={[{required: true, message: '请输入昵称'}]}
                />
            </ProFormList>
            <ProForm.Item label="博客首页展示图管理" name="slideVenue">
                <MyUpload onUploadSuccess={onAvatarUploadSuccess} type={'picture-card'} maxCount={5}
                          defaultPictureUrl={slideVenue} aspect={16 / 9}/>
            </ProForm.Item>
        </ProForm>
    );
};
export default BlogSetting;
