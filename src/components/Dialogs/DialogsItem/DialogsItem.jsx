import React from 'react';
import classes from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    const activeDialogsItem = () => {
        return navData => navData.isActive ? classes.activeDialogsItem : classes.dialogsItem
    }
    return <NavLink to={`/dialogs/${props.id}`} className={activeDialogsItem()}>{props.name}</NavLink>
}

export default DialogsItem;
