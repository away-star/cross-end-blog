import React from "react";
import MDEditor from '@uiw/react-md-editor';
import styles from './index.less';
import {Row} from "antd";
import {useModel} from "@umijs/max";

export default function App() {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const {updateWriteData} = useModel('writeModel', (model) => ({
        updateWriteData: model.updateWriteData,
    }));

    const mdChange = (v:string|undefined) => {
        setValue(v??'')
        updateWriteData('content', v??'')
    }

    const markdownStyle = {
        backgroundColor: "#000000",
        color: "#FFFFFF",
        fontFamily: 'Times New Roman, Times, serif',
        fontWeight: 400 as React.CSSProperties['fontWeight'],
        fontSize: 18 as React.CSSProperties['fontSize'],
        lineHeight: 1.6 as React.CSSProperties['lineHeight'],
        padding: "20px",
    };

    return (
        <Row justify={"center"}>
            <div className={styles.container}>
                <MDEditor
                    className={styles.md}
                    value={value}
                    onChange={mdChange}
                    height={800}
                    color={"rgba(138,53,53,0.5)"}
                    previewOptions={{
                        components:{
                            code({inline, className, children, ...props}) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                    <pre className={className} style={markdownStyle} {...props}>
                                        <code className={className} style={markdownStyle} {...props}>
                                            {String(children).replace(/\n$/, '')}
                                        </code>
                                    </pre>
                                ) : (
                                    <code className={className} style={markdownStyle} {...props}>
                                        {String(children).replace(/\n$/, '')}
                                    </code>
                                );
                            }
                        }
                    }}
                />
            </div>
        </Row>
    );
}
