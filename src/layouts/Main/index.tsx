import React from 'react';
import HeaderNav from "@/layouts/HeaderNav";
import Footer from "@/layouts/Footer";
import Body from "@/layouts/Body";
import '@/global.less'
import styles from './index.less'
import Index from "@/pages/Test";


const Main = ()=> {
    return (<>
        <div className={styles.overallCSS}>
          {/*  <div className="videocontainer">
                <video className="fullscreenvideo" poster={"@/assets/backgroundImg.jpeg"} id="bgvid" playsInline autoPlay
                       muted loop>
                    <source src={"@/assets/backgroundVideo.mp4"} type="video/mp4"/>
                </video>
            </div>*/}
            <HeaderNav/>
            <Body/>
            <Footer/>
        </div>
        </>
    );
};

export default Main;
