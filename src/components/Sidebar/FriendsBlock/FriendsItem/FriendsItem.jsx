import React from 'react';
import classes from './FriendsItem.module.css';

const FriendsItem = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className="name">
                {props.name}
            </div>
        </div>
    );
}

export default FriendsItem;

