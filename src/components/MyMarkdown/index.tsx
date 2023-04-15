
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, solarizedlight, atomDark,hopscotch,okaidia,materialOceanic,gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './index.less';

interface IProps {
    text: string;
}

const MyMarkdown: React.FC<IProps> = ({ text }) => {
    const randStyle = (): any => {
        const styles = [tomorrow, atomDark, solarizedlight,hopscotch,okaidia,materialOceanic,gruvboxDark];
        return styles[Math.floor(Math.random() * styles.length)];
    };



    const renderCodeBlock = ({ className, children }: any) => {
        const language = className ? className.replace('language-', '') : '';
        return (
            <SyntaxHighlighter language={language || 'ts'} style={randStyle()}>
                {children}
            </SyntaxHighlighter>
        );
    };

    return (
        <ReactMarkdown
            className={styles.body}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
                code: renderCodeBlock,
            }}
        >
            {text}
        </ReactMarkdown>
    );
};

export default MyMarkdown;
