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

    return {initialData, setInitialData,userInfoModalOpen,setUserInfoModalOpen,blogSettingModalOpen,setBlogSettingModalOpen,getRandSlide}
}
