import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                <DialogsItem id={'1'} name={'Angelina'}/>
                <DialogsItem id={'2'} name={'Anton'}/>
                <DialogsItem id={'3'} name={'Igor'}/>
                <DialogsItem id={'4'} name={'Sashka'}/>
            </div>
            <div className={classes.messages}>
                <MessagesItem message={'Hi!'}/>
                <MessagesItem message={'How are you?'}/>
                <MessagesItem message={'Hey'}/>
            </div>
        </div>
    );
}

export default Dialogs;
