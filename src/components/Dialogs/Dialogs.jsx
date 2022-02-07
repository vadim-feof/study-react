import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    // для обработки активной ссылки
    const activeDialogsItem = () => {
        return navData => navData.isActive ? classes.activeDialogsItem : classes.dialogsItem
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                <NavLink to='/dialogs/1' className={activeDialogsItem()}>
                    Angelina
                </NavLink>
                <NavLink to='/dialogs/2' className={activeDialogsItem()}>
                    Anton
                </NavLink>
                <NavLink to='/dialogs/3' className={activeDialogsItem()}>
                    Igor
                </NavLink>
                <NavLink to='/dialogs/4' className={activeDialogsItem()}>
                    Sashka
                </NavLink>
            </div>
            <div className={classes.messages}>
                <div className={classes.messagesItem}>
                    Hi!
                </div>
                <div className={classes.messagesItem}>
                    How are you?
                </div>
                <div className={classes.messagesItem}>
                    Hey
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
