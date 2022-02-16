import React from 'react';
import classes from './Posts.module.css'
import PostItem from "./PostItem/PostItem";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'


const Posts = (props) => {
    let postsItem = props.postsPage.postsData.map( p => <PostItem id={p.id} likeCount={p.likeCount} message={p.message}/>).reverse()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onChangePostText = (event) => {
        props.dispatch(updateNewPostTextActionCreator(event.target.value))
    }

    return (
        <div className={classes.posts}>
            My posts
            <div>
                <textarea onChange={onChangePostText} value={props.postsPage.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Create post</button>
            </div>
            <div>
                { postsItem }
            </div>
        </div>
    );
}

export default Posts;
