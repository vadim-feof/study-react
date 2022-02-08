import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Angelina'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Sashka'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hey'}
    ]

    let dialogsElement = dialogsData.map( d => <DialogsItem id={d.id} name={d.name}/>)
    let messagesElement = messagesData.map( m => <MessagesItem id={m.id} message={m.message}/>)

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
