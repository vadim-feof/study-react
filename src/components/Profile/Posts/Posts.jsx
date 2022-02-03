import React from 'react';
import classes from './Posts.module.css'
import PostItem from "./PostItem/PostItem";

const Posts = () => {
    return (
        <div className={classes.posts}>
            My posts
            <textarea></textarea>
            <button>Create post</button>
            <div>
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    );
}

export default Posts;
