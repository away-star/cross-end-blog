import React, {useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {
    tomorrow,
    solarizedlight,
    atomDark,
    hopscotch,
    okaidia,
    materialOceanic,
    gruvboxDark
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './index.less';
import {history} from "@@/core/history";

interface IProps {
    text: string;
}

const MyMarkdown: React.FC<IProps> = ({text}) => {


    const randStyle = (): any => {
        const styles = [tomorrow, atomDark, solarizedlight, hopscotch, okaidia, materialOceanic, gruvboxDark];
        return styles[Math.floor(Math.random() * styles.length)];
    };

    const renderCodeBlock = ({className, children}: any) => {
        const language = className ? className.replace('language-', '') : '';
        return (
            <SyntaxHighlighter language={language || 'ts'} style={randStyle()}>
                {children}
            </SyntaxHighlighter>
        );
    };

    const pathParts = history.location.pathname.trim().split('/');
    const idUrl = pathParts[pathParts.length - 2];

    useEffect(() => {
        if (isNaN(Number(idUrl))) {
            console.log('not a number')
            const element = document.querySelector(`.${styles.body}`);
            element?.classList.add(styles.inner);
        }
    }, [])


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
