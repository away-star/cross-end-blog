import React, {useState} from 'react';
// @ts-ignore
import MdEditor, {MdEditorProps} from "md-editor-rt";
import 'md-editor-rt/lib/style.css';
import {useModel} from "@umijs/max";
import axios from "axios";

export default function MDRt() {
    const [value, setValue] = useState<string>("**写下今日收获吧**");

    const [theme] = useState('default');
    const [previewTheme] = useState('github');
    const [codeTheme] = useState('github');


    const {postWriteData, setPostWriteData} = useModel('writeModel', (model) => ({
        postWriteData: model.postWriteData,
        setPostWriteData: model.setPostWriteData,
    }));

    const mdChange = (v: string | undefined) => {
        setValue(v ?? '');
        setPostWriteData({...postWriteData, content: v})
    };


    const onUploadImg = async (
        files: File[],
        callback: MdEditorProps['onUploadImg']
    ) => {
        const res = await Promise.all(
            files.map((file) => {
                return new Promise((resolve, reject) => {
                    const form = new FormData();
                    form.append('file', file);
                    axios
                        .post('/source/image/upload', form, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                'Authorization': localStorage.getItem('Authorization')!
                            }
                        })
                        .then((res) => {
                            if (res.status === 200) {
                                resolve(res);
                            } else {
                                reject(`Upload failed with status: ${res.status}`);
                            }
                        })
                        .catch((error) => reject(`Upload failed with error: ${error}`));
                });
            })
        );

        const failedUploads = res.filter((response: any) => response instanceof Error);
        if (failedUploads.length > 0) {
            console.error(`Failed uploads: ${failedUploads}`);
        } else {
            callback(res.map((item: any) => item.data.data));
        }
    };

    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,height:'100vh'}}>
        <MdEditor
            style={{ width: '80%',height:'100%' }}
            modelValue={value}
            onChange={mdChange}
            onUploadImg={onUploadImg}
            theme={theme}
            previewTheme={previewTheme}
            codeTheme={codeTheme}
        />
    </div>
}
