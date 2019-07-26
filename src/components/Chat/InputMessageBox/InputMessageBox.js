import React, { useState } from 'react';
import classes from './InputMessageBox.module.css';

const InputMessageBox = props => {
    const [input, setInput] = useState('');

    const getInputHandler = event => {
        props.setMessage(event.target.value);
        setInput(event.target.value);
    }

    const clearInputHandler = () => {
        setInput('');
    }

    const eventKeyHandler = event => {
        if (event.charCode === 13) {
            props.sendMessage();
            clearInputHandler();
        }
    }

    return (
        <div className={classes.InputMessageBox}>
            <div className={classes.InputMessageBoxPlusButton}>
                <div></div>
                <div></div>
            </div>
            <div>
                <input type="text" className={classes.InputMessageBoxInput} placeholder="Type here" onChange={getInputHandler} onKeyPress={eventKeyHandler} value={input} />
            </div>
            <div className={classes.InputMessageBoxSendButton} onClick={() => {
                props.sendMessage();
                clearInputHandler();
            }}>
                <div className={classes.InputMessageBoxArrow}>&#x1F86A;</div>
            </div>
        </div>
    )
}

export default InputMessageBox;