import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = (props) => {
    let dialogsElement = props.dialogsData.map(d => <DialogsItem id={d.id} name={d.name} avatarUrl={d.avatarUrl}/>)
    let messagesElement = props.messagesData.map(m => <MessagesItem id={m.id} message={m.message}/>)

    const onChangeMessageText = (e) => {
        props.onChangeMessageText(e.target.value)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs__list}>
                {dialogsElement}
            </div>
            <div className={classes.messages__wrapper}>
                <div className={classes.messages__list}>
                    {messagesElement}
                </div>
                <div className={classes.messages__input}>
                    <textarea onChange={onChangeMessageText}
                              value={props.newMessageText}/>
                    <button onClick={props.onSendMessage} className={classes.sendButton}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
