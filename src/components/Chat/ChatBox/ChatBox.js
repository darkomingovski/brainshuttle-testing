import React from 'react';
import classes from './ChatBox.module.css';

const ChatBox = props => {
    const messages = props.messages;
    const user = props.chatUser;

    return (
        <div className={classes.ChatBox}>
            <div>
                {messages.map(message => {
                    return (
                        <div className={classes.ChatBoxMessage} key={messages.indexOf(message)} 
                        style={{backgroundColor: message.author !== user ? 'rgba(110, 175, 153, 1)' : 'rgba(186, 218, 234, 1)',
                                color: message.author !== user ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'}}>
                        <div className={classes.ChatBoxAuthor}>{message.author}</div> 
                        <div className={classes.ChatBoxContent}>{message.message}</div>
                        <div className={classes.ChatBoxSeen}>seen</div>
                        <div className={classes.ChatBoxCheckMark}><div>&#10003;</div><div>&#10003;</div></div>
                        <div className={classes.ChatBoxTime}>{message.time}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ChatBox;