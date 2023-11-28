import {message} from "antd";
import {history} from "umi";

export function getIdFromUrl(url: string) {
    return url.trim().split('/')[2];
}


