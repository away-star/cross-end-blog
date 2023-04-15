import {useState} from "react";
import {initialData} from "@/services/api";

export default ()=>{
    const [initialData,setInitialData] = useState<initialData>({
            userInfo:undefined,
            personage:undefined,
        }
    );

    return {initialData, setInitialData};
}
