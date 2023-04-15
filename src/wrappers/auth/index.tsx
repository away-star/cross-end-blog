import {history} from "umi";

export default () => {
    console.log(localStorage.getItem('Authorization'))
    const loginInformationId = localStorage.getItem('loginInformationId')
    console.log(loginInformationId)
    if (loginInformationId === null || loginInformationId === undefined || loginInformationId === '') {
        history.push('/checkIn')
    } else {
        history.push(`/blog/${loginInformationId}/home`)
    }
}
