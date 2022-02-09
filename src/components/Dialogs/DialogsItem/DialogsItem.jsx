import React from 'react';
import classes from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    const activeDialogsItem = () => {
        return navData => navData.isActive ? classes.activeDialogsItem : classes.dialogsItem
    }
    return (
        <NavLink to={`/dialogs/${props.id}`} className={activeDialogsItem()}>
            <div className={classes.wrapper}>
                <div className={classes.avatar}>
                    <img src={props.avatarUrl} alt=""/>
                </div>
                <div className={classes.name}>
                    {props.name}
                </div>
            </div>
        </NavLink>
    );
}

export default DialogsItem;
