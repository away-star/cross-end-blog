import './information1.less'
import React from "react";
import Button2 from "@/components/Button2";

interface InterfaceProps {
    date: string;
    title: string;
    content: string;
}


const information: React.FC<InterfaceProps> = (props) => {
    return (
            <div className="information1">
                <div className="information1__content">
                    <div className="information1__date"> {props.date}
                    </div>
                    <div className="information1__info">
                        <h3>{<Button2 flag={props.title}/>}</h3>
                        <h3 className={"information1__info_content"}>{props.content}</h3>
                    </div>
                </div>
            </div>
    )
}


export default information;
