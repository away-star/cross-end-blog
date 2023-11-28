import {useState} from "react";


export default () => {


    const [userInfoModalOpen, setUserInfoModalOpen] = useState<boolean>(false);

    const [blogSettingModalOpen, setBlogSettingModalOpen] = useState<boolean>(false);

    const [globalLoading, setGlobalLoading] = useState<boolean>(false);

    const [darkEnv, setDarkEnv] = useState<boolean>(false);

    const shouldShowModal = (authorId: string | null): boolean => {
        return localStorage.getItem('loginInformationId') === authorId
    }


    return {
        globalLoading,
        setGlobalLoading,
        userInfoModalOpen,
        setUserInfoModalOpen,
        blogSettingModalOpen,
        setBlogSettingModalOpen,
        darkEnv,
        setDarkEnv,
        shouldShowModal
    }
}
