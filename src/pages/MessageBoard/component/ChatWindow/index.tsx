import React, {useState} from 'react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {MainContainer, ChatContainer, MessageList, Message, MessageInput} from '@chatscope/chat-ui-kit-react';


const ChatWindow = () => {
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleOnChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = () => {
        setMessages([...messages, newMessage]);
        setNewMessage('');
    };

    return (
        <div style={{ position:"relative", height: "500px" }}>
            <MainContainer>
                <ChatContainer>
                    <MessageList>

                    </MessageList>
                    <MessageInput placeholder="Type message here" />
                </ChatContainer>
            </MainContainer>
        </div>
    );
};

export default ChatWindow;
