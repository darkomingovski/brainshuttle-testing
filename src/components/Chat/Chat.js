import React, { useState, useEffect } from 'react';
import classes from './Chat.module.css';
import NewMessage from '../Chat/NewMessage/NewMessage';
import Header from '../Chat/Header/Header';
import SearchContacts from '../Chat/SearchContacts/SearchContacts';
import ChatBox from '../Chat/ChatBox/ChatBox';
import ContactList from '../Chat/ContactList/ContactList';
import InputMessageBox from '../Chat/InputMessageBox/InputMessageBox';
import io from "socket.io-client";

const Chat = props => {
    // eslint-disable-next-line
    const [defaultUser, setDefaultUser] = useState('Scott Donaldson');
    const [chatUser, setChatUser] = useState('Eugene Cali');
    const [defaultUserMessage, setDefaultUserMessage] = useState('');

    let data;
    let chatHistory = JSON.parse(localStorage.getItem('messages' + chatUser.replace(/\s+/g, '')));
    chatHistory !== null ? data = chatHistory : data = [];
    
    const [messages, setMessages] = useState(data);
    const socket = io('192.168.0.15:9900');
    
    socket.on('message', function (data) {
        receiveMessage(data);
    });

    useEffect(() => {
        localStorage.setItem('messages' + chatUser.replace(/\s+/g, ''), JSON.stringify(messages));
        // eslint-disable-next-line
    }, [messages]);

    useEffect(() => {
        let messages = [JSON.parse(localStorage.getItem('messages' + chatUser.replace(/\s+/g, '')))]
        messages[0] !== null ? setMessages(messages[0]) : setMessages([]);
    }, [chatUser]);

    const setChatUserHandler = event => {
        const user = event.target.title;
        setChatUser(user);
    };

    const setMessagetoStateHandler = input => {
        setDefaultUserMessage(input);
    }

    const sendMessageHandler = () => {
        const time = Date().slice(16,21);
        const data = {
            author: defaultUser,
            message: defaultUserMessage,
            time: time
        }
        socket.emit('message', data);
        setMessages([...messages, data]);
        setDefaultUserMessage('');
    };

    const receiveMessage = data => {
        const dataUser = { ...data };
        dataUser.author = chatUser;
        setTimeout(() => { setMessages([...messages, data, dataUser])}, 1000);
    };

    return (
        <div className={classes.ChatGridContainer}>
            <NewMessage />
            <Header chatUser={chatUser} />
            <SearchContacts />
            <ChatBox chatUser={chatUser} messages={messages} />
            <ContactList contacts={props.contacts} chatUserList={setChatUserHandler} />
            <InputMessageBox sendMessage={sendMessageHandler} setMessage={setMessagetoStateHandler} />
        </div>
    )
}

export default Chat;