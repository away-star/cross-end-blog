import { IApi } from 'umi';

export default (api: IApi) => {
    api.addHTMLLinks(() => [{ rel: 'stylesheet',href: 'public/font/font.css'}]);
    api.addHTMLScripts(() => [`console.log('hello world')`]);
};