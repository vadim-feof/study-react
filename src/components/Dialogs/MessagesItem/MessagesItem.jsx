import React from 'react';
import classes from './MessagesItem.module.css';

const MessagesItem = (props) => {
    return <div className={classes.messagesItem}>{props.message}</div>
}

export default MessagesItem;
