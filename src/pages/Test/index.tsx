import React from 'react';
import Back from "@/components/btn/Back";
import DidmondDance from "@/components/load/DidmondDance";
import Servo from "@/components/load/Servo";
import {Menu} from "antd";
import MyMenu from "@/components/btn/MyMenu";
import MyUpload from "@/components/MyUpload";

const Index = (props:any) => {
    console.log(props)
    return (
        // <DidmondDance text={''}/>
        // <Servo text={''}/>
        // <MyMenu text={''}/>
        <MyUpload/>
    );
};

export default Index;
