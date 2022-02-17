import React from 'react';
import classes from './Posts.module.css'
import PostItem from "./PostItem/PostItem";

const Posts = (props) => {
    let postsItem = props.posts.map( p => <PostItem id={p.id} likeCount={p.likeCount} message={p.message}/>).reverse()

    return (
        <div className={classes.posts}>
            My posts
            <div>
                <textarea
                    onChange={(e) => {props.onChangeNewPostText(e.target.value)}}
                    value={props.newPostText}/>
            </div>
            <div>
                <button onClick={props.onClickAddNewPost}>Create post</button>
            </div>
            <div>
                { postsItem }
            </div>
        </div>
    );
}

export default Posts;
