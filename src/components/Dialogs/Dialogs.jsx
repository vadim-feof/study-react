import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = () => {

    let DialogsData = [
        {id: 1, name: 'Angelina'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Sashka'}
    ]

    let MessagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hey'}
    ]

    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                <DialogsItem id={DialogsData[0].id} name={DialogsData[0].name}/>
                <DialogsItem id={DialogsData[1].id} name={DialogsData[1].name}/>
                <DialogsItem id={DialogsData[2].id} name={DialogsData[2].name}/>
                <DialogsItem id={DialogsData[3].id} name={DialogsData[3].name}/>
            </div>
            <div className={classes.messages}>
                <MessagesItem message={MessagesData[0].message}/>
                <MessagesItem message={MessagesData[1].message}/>
                <MessagesItem message={MessagesData[2].message}/>
            </div>
        </div>
    );
}

export default Dialogs;
