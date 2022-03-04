import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA'
const SET_STATUS_TEXT = 'SET_STATUS_TEXT'

let initialState = {
    postsData: [
        {id: 1, message: "My first post", likeCount: 12},
        {id: 2, message: "My second post", likeCount: 23},
        {id: 3, message: "Lorem ipsum dolor sit amet.", likeCount: 11},
        {id: 4, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likeCount: 5},
        {id: 5, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta in similique?", likeCount: 7}
    ],
    newPostText: '',
    profileData: null,
    statusText: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData[state.postsData.length - 1].id + 1,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                profileData: action.profile
            }
        case SET_STATUS_TEXT:
            return {
                ...state,
                statusText: action.newStatusText
            }
        default:
            return state
    }
}

export default profileReducer

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
)

export const setUserProfileData = (profile) => ({type: SET_USER_PROFILE_DATA, profile})
export const setStatus = (newStatusText) => ({
    type: SET_STATUS_TEXT, newStatusText
})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfileData(userId)
        .then(data => {
                dispatch(setUserProfileData(data))
            }
        )
}
export const getUserStatus = userId => dispatch => {
    profileAPI.getUserStatus(userId)
        .then(userStatusText => {
            if (!userStatusText) userStatusText = 'No status'
            dispatch(setStatus(userStatusText))
        })
}
export const updateUserStatus = (statusText) => dispatch => {
    profileAPI.updateUserStatus(statusText)
        .then( data => {
            if (data.resultCode === 0)
                dispatch(setStatus(statusText))
    })
}