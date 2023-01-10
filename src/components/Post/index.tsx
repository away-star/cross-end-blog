import React, {useState} from 'react';
import { Col, List, Row} from 'antd';
import './index.less'

import Button1 from "@/components/Button1";


const dataSource = [
    {
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },{
        title: "springCloud----nacos使用详解",
        avatar:"https://staraway.love/QQ%E5%9B%BE%E7%89%8720230109214132.png",
        createTime:"2023-1-10",
        content:"Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。"
    },

];


const Post: React.FC = () => {

    return(<List
            itemLayout="vertical"
            size="large"
            dataSource={dataSource}
            footer={
                <div>
                    <b>ant design</b> footer part
                </div>
            }
            renderItem={(item,index) => (
                    <div>
                        <List.Item
                            key={item.title}
                            /*extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    className={styles.allList}
                                />
                            }*/
                        >
                            {
                                <Row className="postRow">
                                    <Col offset={index%2===0?12:0}>
                                    <div className="post">
                                        <div className="align-left">
                                            <span className="red"></span>
                                            <span className="yellow"></span>
                                            <span className="green"></span>

                                        </div>
                                        <div className="align-right">
                                            <span className="postDate">{item.createTime}</span>
                                        </div>
                                        <h1>{item.title}</h1>
                                        <img src={item.avatar} alt="加载中"/>
                                        <p >{item.content}
                                        </p >
                                        <Button1 nameHider={"详情"} name={"onClick to detail"}/>
                                    </div>
                                </Col>
                                    <Col offset={index % 2 !== 1 ? 12 : 0}></Col>
                                </Row>}
                        </List.Item>
                    </div>
            )}
        />
    )
}
export default Post;