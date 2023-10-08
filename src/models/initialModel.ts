import {useState} from "react";
import {getUserinfo} from "../../services/userSecurity/api/userController";
import {message} from "antd";
import {history} from "@@/core/history";
import {localStorageUserSecurityKey} from "@/constants";


export default () => {
    const [initialUserData, setInitialUserData] = useState<UserSecurityAPI.UserInfoDto>({});

    const [slideVenue, setSlideVenue] = useState<string[]>([]);



    const getSecurityInfoId = (): string => {
        return initialUserData?.securityInfo?.id?.toString() || ''
    }

    const isOwner = (): boolean => {
        console.log(initialUserData?.securityInfo?.id?.toString(), localStorage.getItem(localStorageUserSecurityKey))
        return initialUserData?.securityInfo?.id?.toString() === localStorage.getItem(localStorageUserSecurityKey)
    }

    const fetchInitialUserData = async (security_info_id: number) => {
        const res = await getUserinfo({security_info_id: security_info_id});
        if (res.code === 200) {
            setInitialUserData(res.data!);
            setSlideVenue(res.data?.userinfo?.slideShow?.split(';') || [])
        } else {
            message.error(res.msg)
            setTimeout(() => {
                history.push('/checkIn')
            }, 1000)
        }
        if (localStorage.getItem('security_info_id') === res.data?.securityInfo?.id?.toString()) {
            if (res.data?.userinfo?.slideShow === null || res.data?.userinfo?.slideShow?.length === 0) {
                message.error('请先配置博客')
                history.push(`/blog/${security_info_id}/setting`)
            }
        }
    }

    return {
        isOwner,
        fetchInitialUserData,
        slideVenue,
        initialUserData,
        setInitialUserData,
        getSecurityInfoId,
    }
}
