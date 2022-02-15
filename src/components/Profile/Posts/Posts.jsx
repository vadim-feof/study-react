import React from 'react';
import classes from './Posts.module.css'
import PostItem from "./PostItem/PostItem";

const Posts = (props) => {
    let postsItem = props.postsPage.postsData.map( p => <PostItem id={p.id} likeCount={p.likeCount} message={p.message}/>).reverse()

    let postElement = React.createRef()
    let onChangePostText = () => {
        props.dispatch({type: 'ON-CHANGE-POST-TEXT', newText: postElement.current.value})
    }

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    return (
        <div className={classes.posts}>
            My posts
            <div>
                <textarea onChange={onChangePostText} ref={postElement} value={props.postsPage.newPostText}/>
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
