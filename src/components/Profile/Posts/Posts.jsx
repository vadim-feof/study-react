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
                <PostItem id={1} likeCount={12} message={'My first post'}/>
                <PostItem id={2} likeCount={23} message={'My second post'}/>
                <PostItem id={3} likeCount={11} message={'Lorem ipsum dolor sit amet.'}/>
                <PostItem id={4} likeCount={5} message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                <PostItem id={5} likeCount={7} message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta in similique?'}/>
            </div>
        </div>
    );
}

export default Posts;
