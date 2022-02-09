import React from 'react';
import classes from './FriendsBlock.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";

const FriendsBlock = (props) => {

    return (
        <div className={classes.wrapper}>
            {props.friendsData.map(f => <FriendsItem name={f.name} avatar={f.avatarUrl}/>)}
        </div>
    );
}

export default FriendsBlock;

