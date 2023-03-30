import React from "react";
import {Outlet} from "umi";
import MyDrawer from "@/layouts/Body/component/MyDrawer";


const Body: React.FC = () => {
    return (
        <>
            <MyDrawer/>
            <Outlet/>
        </>
    )
};

export default Body;
