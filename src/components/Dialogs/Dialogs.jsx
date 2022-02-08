import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = (props) => {
    let dialogsElement = props.dialogsData.map( d => <DialogsItem id={d.id} name={d.name}/>)
    let messagesElement = props.messagesData.map( m => <MessagesItem id={m.id} message={m.message}/>)

    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                { dialogsElement }
            </div>
            <div className={classes.messages}>
                { messagesElement }
            </div>
        </div>
    );
}

export default Dialogs;
