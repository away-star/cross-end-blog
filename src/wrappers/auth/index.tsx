import {history} from "umi";
import {AuthorizationToken, localStorageUserSecurityKey} from "@/constants";

export default () => {
    const loginInformationId = localStorage.getItem(localStorageUserSecurityKey)
    const Authorization = localStorage.getItem(AuthorizationToken);
    if (Authorization === null || loginInformationId === null) {
        history.push('/checkIn')
    } else {
        history.push(`/blog/${loginInformationId}/home`)
    }
}
