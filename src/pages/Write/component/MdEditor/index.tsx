import React from "react";
import MDEditor from '@uiw/react-md-editor';
import styles from './index.less';
import {Row} from "antd";

export default function App() {
    const [value, setValue] = React.useState("**Hello world!!!**");
    return (
        <Row justify={"center"}>
        <div className={styles.container}>
            <MDEditor
                className={styles.md}
                value={value}
                onChange={setValue}
                height={800}
                color={"rgba(138,53,53,0.5)"}
            />
        </div>
        </Row>
    );
}
