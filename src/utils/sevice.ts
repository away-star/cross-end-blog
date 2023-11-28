import {history} from "umi";
import {useModel} from "@@/exports";

export const getRandSlide = (slideShow: string): string => {
    return slideShow.split(';')[Math.floor(Math.random() * slideShow.split(';').length)];
}

export const goToOwnerHome = () => {
    history.replace(`/blog/${localStorage.getItem('loginInformationId')}/home`);
}



