import React from 'react';
import classes from './PostItem.module.css'

const PostItem = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.number}>
                Post №{props.id}
            </div>
            <div className={classes.message}>
                {props.message}
            </div>
            <div className={classes.likeCount}>
                {props.likeCount} likes
            </div>
        </div>
    );
}

export default PostItem;
