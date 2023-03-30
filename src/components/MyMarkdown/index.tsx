import React from 'react';
import styles from './index.less';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {dark} from "react-syntax-highlighter/dist/cjs/styles/prism";

interface IProps {
    text: string;
}

// 脚手架示例组件
const MyMarkdown: React.FC<IProps> = (props) => {
    const {text} = props;
    return (
        <ReactMarkdown
            className={styles.body}
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
                code({inline, className, children}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            style={tomorrow}
                            language={match[1]}
                            PreTag="div"
                        >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>

                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }}
        >{text}</ReactMarkdown>
    );
};

export default MyMarkdown;
