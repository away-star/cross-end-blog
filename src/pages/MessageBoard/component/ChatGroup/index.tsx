import React, { useState } from "react";
import { Input, Button, List } from "antd";

type MessageItem = {
    id: number;
    username: string;
    message: string;
};

type UserItem = {
    id: number;
    username: string;
    online: boolean;
};

const ChatRoom: React.FC = () => {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState<MessageItem[]>([]);
    const [users, setUsers] = useState<UserItem[]>([]);

    const sendMessage = () => {
        if (!text) return;
        const newMessage = {
            id: Date.now(),
            username: "you",
            message: text,
        };
        setMessages((prev) => [...prev, newMessage]);
        setText("");
    };

    return (
        <div style={{ display: "flex", height: "100%" }}>
            <div style={{ flex: 3, padding: "10px" }}>
                <List
                    dataSource={messages}
                    renderItem={(item) => (
                        <List.Item key={item.id} style={{ paddingLeft: "10px" }}>
                            <List.Item.Meta title={item.username} description={item.message} />
                        </List.Item>
                    )}
                />
                <Input.TextArea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onPressEnter={sendMessage}
                    autoSize={{ minRows: 2, maxRows: 6 }}
                    style={{ marginTop: "10px" }}
                />
                <Button type="primary" onClick={sendMessage} style={{ marginTop: "10px" }}>
                    Send
                </Button>
            </div>
            <div style={{ flex: 1, padding: "10px" }}>
                <List
                    dataSource={users}
                    renderItem={(item) => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                title={item.username}
                                description={item.online ? "Online" : "Offline"}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
};

export default ChatRoom;
