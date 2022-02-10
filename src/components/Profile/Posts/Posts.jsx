import React from 'react';
import classes from './Posts.module.css'
import PostItem from "./PostItem/PostItem";

const Posts = (props) => {
    let postsItem = props.postsPage.postsData.map( p => <PostItem id={p.id} likeCount={p.likeCount} message={p.message}/>).reverse()

    let postElement = React.createRef()
    let messageToState = () => {
        props.addPost()
    }

    let onChangeToState = () => {
        let text = postElement.current.value
        props.onChangePostText(text)
    }

    return (
        <div className={classes.posts}>
            My posts
            <div>
                <textarea onChange={onChangeToState} ref={postElement} value={props.postsPage.newPostText}/>
            </div>
            <div>
                <button onClick={messageToState}>Create post</button>
            </div>
            <div>
                { postsItem }
            </div>
        </div>
    );
}

export default Posts;
