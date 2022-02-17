import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import Posts from "./Posts";


const PostsContainer = (props) => {
    let state = props.store.getState()

    let addNewPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return <Posts posts={state.profilePage.postsData}
                  newPostText={state.profilePage.newPostText}
                  onClickAddNewPost={addNewPost}
                  onChangeNewPostText={updateNewPostText}/>
}

export default PostsContainer;
