import {useState} from "react";
import {getUserinfo} from "../../services/userSecurity/api/userController";
import {message} from "antd";
import {history} from "umi";
import {localStorageUserSecurityKey} from "@/constants";


export default () => {
    const [initialUserData, setInitialUserData] = useState<UserSecurityAPI.UserInfoDto>({});

    const [slideVenue, setSlideVenue] = useState<string[]>([]);

    const getSecurityInfoId = (): string => {
        return initialUserData?.securityInfo?.id?.toString() || ''
    }

    const isOwner = (): boolean => {
        return initialUserData?.securityInfo?.id?.toString() === localStorage.getItem(localStorageUserSecurityKey)
    }

    const fetchInitialUserData = async (securityInfoId: number | string) => {
        const res = await getUserinfo({securityInfoId: securityInfoId});
        if (res.code === 200) {
            setInitialUserData(res.data!);
            setSlideVenue(res.data?.userinfo?.slideShow?.split(';') || [])
        } else {
            message.error(res.msg)
            setTimeout(() => {
                history.push('/checkIn')
            }, 1000)
        }
        if (localStorage.getItem('securityInfoId') === res.data?.securityInfo?.id?.toString()) {
            if (res.data?.userinfo?.slideShow === null || res.data?.userinfo?.slideShow?.length === 0) {
                message.error('请先配置博客')
                history.push(`/blog/${securityInfoId}/setting`)
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
