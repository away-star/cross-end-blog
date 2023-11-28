// import {history, Outlet} from "umi";
// import {useModel} from "@@/exports";
// import {useEffect} from "react";
// import {getInitialArgs,initialData} from "@/services/api";
// import {message} from "antd";
//
// export default () => {
//     (localStorage.getItem('Authorization'))
//     const loginInformationId = localStorage.getItem('loginInformationId')
//     (loginInformationId)
//
//
//     const pathParts = history.location.pathname.trim().split('/');
//     const lastPart = pathParts[pathParts.length - 2];
//
//     const {setInitialData} = useModel('initialModel', (model) => ({
//         setInitialData: model.setInitialData,
//     }));
//
//     useEffect(
//         () => {
//             let loginInformationId = localStorage.getItem('loginInformationId')
//             (loginInformationId)
//             if (lastPart !== loginInformationId) {
//                 loginInformationId = lastPart ? lastPart : null
//             }
//             (lastPart)
//             const initial = async () => {
//                 const res = await getInitialArgs({loginInformationId: loginInformationId});
//                 (res)
//                 if (res.code !== 200) {
//                     message.error('查询不到此用户信息')
//                     history.replace('/checkIn')
//                     return
//                 }
//                 localStorage.setItem('loginInformationId', res?.data?.loginInformation?.id)
//                 const userInfo: UserInfoAPI.userInfoData = {
//                     csdnAddr: res.data.userInfoDto.csdnAddr,
//                     githubAddr: res.data.userInfoDto.githubAddr,
//                     juejinAddr: res.data.userInfoDto.juejinAddr,
//                     subname: res.data.userInfoDto.subname,
//                     address: res.data.userInfoDto.address,
//                     avatar: res.data.userInfoDto.avatar,
//                     birthday: res.data.userInfoDto.birthday,
//                     gender: res.data.userInfoDto.gender,
//                     idiograph: res.data.userInfoDto.idiograph,
//                     nickname: res.data.userInfoDto.nickname,
//                     qq: res.data.userInfoDto.qq,
//                     slideVenue: res.data.userInfoDto.slideVenue,
//                     userLever: res.data.userInfoDto.userLever,
//                     welcomeText: res.data.userInfoDto.welcomeText
//                 }
//                 const initialData: initialData = {
//                     personage: {
//                         email: res.data.loginInformation.email,
//                         loginInformationId: res.data.loginInformation.id,
//                         proverbs: res.data.proverbs,
//                         slideVenue: res.data.userInfoDto.slideVenue,
//                         labels: res.data.labels
//                     }, userInfo: userInfo
//                 }
//                 setInitialData(initialData);
//             }
//             initial();
//         }, []
//     )
//
//     setTimeout(() => {
//     return <Outlet />;
//     },500)
//     // if (loginInformationId === null || loginInformationId === undefined || loginInformationId === '') {
//     //     history.push('/checkIn')
//     // } else {
//     //     history.push(`/blog/${loginInformationId}/home`)
//     // }
// }
