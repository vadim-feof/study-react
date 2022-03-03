import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = (props) => {
    let dialogsElement = props.dialogsData.map(d => <DialogsItem id={d.id} key={d.id} name={d.name} avatarUrl={d.avatarUrl}/>)
    let messagesElement = props.messagesData.map(m => <MessagesItem key={m.id} message={m.message}/>)

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
                    <textarea onChange={(event) => props.updateNewMessage(event.target.value)}
                              value={props.newMessageText}/>
                    <button onClick={props.addMessage} className={classes.sendButton}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
