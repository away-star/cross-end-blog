
import React, { useState } from 'react';
import { Form, List, Input, Button, Typography } from 'antd';

type Message = {
    content: string;
    date: string;
};

const CommentArea = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSendMessage = (values: { message: string }) => {
        const newMessage: Message = {
            content: values.message,
            date: new Date().toLocaleString(),
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div style={{ padding: '24px' }}>
            <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
                Welcome to Our Message Board!
            </Typography.Title>
            <Form onFinish={handleSendMessage} style={{ marginBottom: '24px' }}>
                <Form.Item name="message" rules={[{ required: true, message: 'Please enter your message!' }]}>
                    <Input.TextArea placeholder="Enter your message here" autoSize={{ minRows: 3, maxRows: 6 }} />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Send Message
                </Button>
            </Form>
            <List
                bordered
                dataSource={messages}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text strong>{item.date}</Typography.Text> - {item.content}
                    </List.Item>
                )}
            />
        </div>
    );
};

export default CommentArea;
