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

    const {updateWriteData} = useModel('writeModel', (model) => ({
        updateWriteData: model.updateWriteData,
    }));

    const mdChange = (v: string | undefined) => {
        (v);

        setValue(v ?? '');
        updateWriteData("content", v ?? '');
    };


    const onUploadImg = async (
        files: File[],
        callback: MdEditorProps['onUploadImg']
    ) => {
        const res = await Promise.all(
            files.map((file) => {
                return new Promise((rev, rej) => {
                    const form = new FormData();
                    form.append('file', file);
                    axios
                        .post('/source/upload', form, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then((res) => rev(res))
                        .catch((error) => rej(error));
                });
            })
        );

        // @ts-ignore
        callback(res.map((item) => item.data.message))
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
