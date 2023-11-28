import {history} from "umi";

export default () => {
    const loginInformationId = localStorage.getItem('loginInformationId')
    const Authorization = localStorage.getItem('Authorization');
    if (Authorization === null || loginInformationId === null) {
        history.push('/checkIn')
    } else {
        history.push(`/blog/${loginInformationId}/home`)
    }
}
