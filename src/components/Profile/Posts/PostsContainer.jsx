import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onChangeNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        onClickAddNewPost: () => {
            dispatch(addPostActionCreator())
        }
    }
)



const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
