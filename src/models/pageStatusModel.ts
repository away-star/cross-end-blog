import {useState} from "react";


export default () => {


    const [userInfoModalOpen, setUserInfoModalOpen] = useState<boolean>(true);

    const [blogSettingModalOpen, setBlogSettingModalOpen] = useState<boolean>(true);

    const [globalLoading, setGlobalLoading] = useState<boolean>(false);

    return {
        globalLoading,
        setGlobalLoading,
        userInfoModalOpen,
        setUserInfoModalOpen,
        blogSettingModalOpen,
        setBlogSettingModalOpen
    }
}
