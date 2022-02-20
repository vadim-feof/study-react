const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (u) => {
                    if (u.id === action.userId)
                        u.follow = true
                    return u;
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map( (u) => {
                    if (u.id === action.userId)
                        u.follow = false
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export default usersReducer

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unFollowActionCreator = (userId) => ({type: UN_FOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})