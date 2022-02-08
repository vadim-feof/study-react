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
                <PostItem id={postsData[0].id} likeCount={postsData[0].likeCount} message={postsData[0].message}/>
                <PostItem id={postsData[1].id} likeCount={postsData[1].likeCount} message={postsData[1].message}/>
                <PostItem id={postsData[2].id} likeCount={postsData[2].likeCount} message={postsData[2].message}/>
                <PostItem id={postsData[3].id} likeCount={postsData[3].likeCount} message={postsData[3].message}/>
                <PostItem id={postsData[4].id} likeCount={postsData[4].likeCount} message={postsData[4].message}/>
            </div>
        </div>
    );
}

export default Posts;
