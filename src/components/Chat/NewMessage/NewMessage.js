import React from 'react';
import classes from './NewMessage.module.css';

const newMessage = props => {
    return (
        <div className={classes.NewMessage}>
            <div className={classes.NewMessageArrow}>&#x1F868;</div>
            <div className={classes.NewSingleMessageTitle}>New&nbsp;Single&nbsp;Message</div>
        </div>
    )
}

export default newMessage;