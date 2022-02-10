import React from 'react';
import classes from './Posts.module.css'
import PostItem from "./PostItem/PostItem";

const Posts = (props) => {
    let postsItem = props.postsData.map( p => <PostItem id={p.id} likeCount={p.likeCount} message={p.message}/>).reverse()

    let postElement = React.createRef()
    let messageToState = () => {
        let message = postElement.current.value
        props.addPost(message)
    }

    return (
        <div className={classes.posts}>
            My posts
            <div>
                <textarea ref={postElement}></textarea>
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
