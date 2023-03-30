import React, {useEffect} from "react";
import loginSvg from "@/assets/login.svg";
import registerSvg from "@/assets/register.svg";
import "./index.less";
import {history} from "umi";
import {Button, message} from 'antd';

const CheckIn: React.FC = () => {

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn?.addEventListener("click", () => {
            console.log("666")
            container?.classList.add("sign-up-mode");
        });

        sign_in_btn?.addEventListener("click", () => {
            console.log("666")
            container?.classList.remove("sign-up-mode");
        });
    }, [])


    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">登录</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="用户名"/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="密码"/>
                        </div>
                        <input type="submit" value="立即登录" className="btn solid" onClick={() => {
                            message.success("登录成功");
                            setTimeout(() => {
                                history.push("blog/home")
                            }, 1000);
                        }
                        }/>
                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">注册</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="用户名"/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="邮箱"/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="密码"/>
                        </div>
                        <input type="submit" className="btn" value="立即注册"/>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>加入我们</h3>
                        <p>
                            加入我们，成为本站的一份子。
                        </p>
                        <button className="btn transparent" id="sign-up-btn" type={"button"}>
                            去注册
                        </button>
                    </div>
                    <img src={loginSvg} className="image" alt=""/>
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>已有帐号？</h3>
                        <p>
                            立即登录已有帐号，享受独家权益。
                        </p>
                        <button className="btn transparent" id="sign-in-btn" type={"button"}>
                            去登录
                        </button>
                    </div>
                    <img src={registerSvg} className="image" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default CheckIn;
