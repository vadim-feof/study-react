import React from 'react';
import classes from './Posts.module.css'
import PostItem from "./PostItem/PostItem";

const Posts = () => {

    let postsData = [
        {id: 1, message: "My first post", likeCount: 12},
        {id: 2, message: "My second post", likeCount: 23},
        {id: 3, message: "Lorem ipsum dolor sit amet.", likeCount: 11},
        {id: 4, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likeCount: 5},
        {id: 5, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta in similique?", likeCount: 7}
    ]
    
    let postsItem = postsData.map( p => <PostItem id={p.id} likeCount={p.likeCount} message={p.message}/>)

    return (
        <div className={classes.posts}>
            My posts
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Create post</button>
            </div>
            <div>
                { postsItem }
            </div>
        </div>
    );
}

export default Posts;
