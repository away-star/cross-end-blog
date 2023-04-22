import {history} from "umi";

export default () => {
    console.log(localStorage.getItem('Authorization'))
    const loginInformationId = localStorage.getItem('loginInformationId')
    const Authorization = localStorage.getItem('Authorization')
    console.log(loginInformationId)
    if (Authorization === null || Authorization === undefined || Authorization === '') {
        history.push('/checkIn')
    } else {
        history.push(`/blog/${loginInformationId}/home`)
    }
}
