const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        {id: 1, message: "My first post", likeCount: 12},
        {id: 2, message: "My second post", likeCount: 23},
        {id: 3, message: "Lorem ipsum dolor sit amet.", likeCount: 11},
        {id: 4, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likeCount: 5},
        {id: 5, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta in similique?", likeCount: 7}
    ],
    newPostText: '',
}
const profileReducer = (state = initialState, action) => {
    let newState = {...state}
    newState.postsData = [...state.postsData]
    switch (action.type) {
        case ADD_POST:


            if (newState.newPostText === '') return
            let lastId = newState.postsData[newState.postsData.length - 1].id + 1
            let newPost = {
                id: lastId,
                message: newState.newPostText,
                likeCount: 0
            }
            newState.postsData.push(newPost)
            newState.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            newState.newPostText = action.newText
            break;
    }
    return newState
}

export default profileReducer

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
)