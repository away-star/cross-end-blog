import {history} from "umi";
import {getIdFromUrl} from "@/utils/urlUtil";
import {useModel} from "@@/exports";

export default () => {
    const {initialUserData, setInitialUserData, fetchInitialUserData} = useModel('initialModel', (model) => ({
        setInitialUserData: model.setInitialUserData,
        initialUserData: model.initialUserData,
        fetchInitialUserData: model.fetchInitialUserData
    }));

    // 检查id合法性
    if (getIdFromUrl(history.location.pathname).length !== 19) {
        console.error('id不合法')
        history.push('/404')
    }
}
