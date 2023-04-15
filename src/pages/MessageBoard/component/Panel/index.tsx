import React, { useState } from "react";
import { Form, Input, Button, List } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

interface Message {
    id: number;
    content: string;
    timestamp: number;
    author: string;
    reply?: string;
}

interface Props {
    owner: string; // 主人
}

const MessageBoard: React.FC<Props> = ({ owner }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [form] = Form.useForm();
    const [editingMessage, setEditingMessage] = useState<Message | null>(null);

    const handleAddMessage = (values: { content: string }) => {
        const newMessage: Message = {
            id: new Date().getTime(),
            content: values.content,
            timestamp: new Date().getTime(),
            author: "star",
        };
        setMessages([...messages, newMessage]);
        form.resetFields(); // 清空输入框
    };

    const handleDeleteMessage = (id: number) => {
        setMessages(messages.filter((m) => m.id !== id));
    };

    const handleEditMessage = (message: Message) => {
        setEditingMessage(message);
        form.setFieldsValue({ reply: message.reply }); // 将回复内容填入表单
    };

    const handleSaveMessage = (values: { reply: string }) => {
        const updatedMessage = { ...editingMessage, reply: values.reply };
        // setMessages(
        //     messages.map((m) =>
        //         m.id === editingMessage?.id ? updatedMessage: m
        //     )
        // );
        setEditingMessage(null);
        form.resetFields(); // 清空输入框
    };

    return (
        <div>
            <h1>留言板</h1>
            <Form form={form} onFinish={handleAddMessage}>
                <Form.Item name="content" rules={[{ required: true }]}>
                    <Input.TextArea placeholder="请在这里留言" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">发布留言</Button>
                </Form.Item>
            </Form>
            <List
                itemLayout="vertical"
                dataSource={messages}
                renderItem={(message) => (
                    <List.Item
                        key={message.id}
                        actions={
                            owner === message.author
                                ? [
                                    <Button key="edit" onClick={() => handleEditMessage(message)}>
                                        编辑
                                    </Button>,
                                    <Button key="delete" onClick={() => handleDeleteMessage(message.id)}>
                                        删除
                                    </Button>,
                                ]
                                : []
                        }
                    >
                        <List.Item.Meta
                            title={message.author}
                            description={moment(message.timestamp).fromNow()}
                        />
                        <div>{message.content}</div>
                        {message.reply && (
                            <div>
                                <p style={{ fontWeight: "bold" }}>{`${owner}的回复`}</p>
                                <div>{message.reply}</div>
                            </div>
                        )}
                    </List.Item>
                )}
            />
            {editingMessage && (
                <Form form={form} onFinish={handleSaveMessage}>
                    <Form.Item name="reply" rules={[{ required: true }]}>
                        <Input.TextArea placeholder="请输入回复内容" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            保存回复
                        </Button>
                        <Button onClick={() => setEditingMessage(null)}>取消编辑</Button>
                    </Form.Item>
                </Form>
            )}
        </div>
    );
};

export default MessageBoard;
