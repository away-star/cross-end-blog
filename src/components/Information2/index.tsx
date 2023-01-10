import './information2.less'
import React from "react";
import {Col, Row} from "antd";

interface InterfaceProps {
    date: string;
    title1: string;
    title2: string;
    title3: string;
    content: string;
}


const information: React.FC = () => {
    return (
        <div className="information2">
            <p>

                <span>{"666"}</span>

            </p>
            <p><span>HOVER ME</span></p>
            <p><span>HOVER ME</span></p>
        </div>
    )
}


export default information;
