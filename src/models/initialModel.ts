import {useState} from "react";
import {initialData} from "@/services/api";

export default ()=>{
    const [initialData,setInitialData] = useState<initialData>({
            userInfo:undefined,
            personage:undefined,
        }
    );
    const [userInfoModalOpen,setUserInfoModalOpen] = useState<boolean>(false);

    const [blogSettingModalOpen,setBlogSettingModalOpen] = useState<boolean>(false);

    const getRandSlide = () :string=>{
        const slide = initialData.personage?.slideVenue;
        if(slide){
            return slide[Math.floor(Math.random()*slide.length)]
        }
        return ' '
    }

    const getLoginInformationId = () :string=>{
        return initialData.personage?.loginInformationId || ''
    }

    const isOwner = () :boolean=>{
        console.log(initialData.personage?.loginInformationId.toString(),localStorage.getItem('loginInformationId'))

        return initialData.personage?.loginInformationId.toString() === localStorage.getItem('loginInformationId')
    }


    return {isOwner,initialData, setInitialData,userInfoModalOpen,getLoginInformationId,setUserInfoModalOpen,blogSettingModalOpen,setBlogSettingModalOpen,getRandSlide}
}
