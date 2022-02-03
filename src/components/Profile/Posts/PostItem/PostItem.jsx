import React from 'react';
import classes from './PostItem.module.css'

const PostItem = () => {
    return (
        <div className={classes.item}>
            Post №1
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quo!
            </div>
            <div>
                Like
            </div>
        </div>
    );
}

export default PostItem;
