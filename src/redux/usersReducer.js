import {followAPI, userAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    usersCountOnPage: 25,
    isFetching: false,
    followUsersQueue: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (u) => {
                    if (u.id === action.userId)
                        u.followed = true
                    return u;
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map( (u) => {
                    if (u.id === action.userId)
                        u.followed = false
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followUsersQueue: action.isFollowingFetching ?
                    [...state.followUsersQueue, action.userId]
                    : state.followUsersQueue.filter( id => id != action.userId)
            }
        default:
            return state
    }
}

export default usersReducer

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UN_FOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowing = (isFollowingFetching, userId) => (
    {type: TOGGLE_IS_FOLLOWING, isFollowingFetching, userId}
)

export const getUsers = (currentPage, usersCountOnPage) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    userAPI.getUsers(currentPage, usersCountOnPage)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setUsers(data.items))
        })
}

export const followOnUser = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    followAPI.follow(userId)
        .then(data => {
                if (data.resultCode === 0)
                    dispatch(follow(userId))
                dispatch(toggleIsFollowing(false, userId))
            }
        )
}

export const unFollowOnUser = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    followAPI.unFollow(userId)
        .then(data => {
                if (data.resultCode === 0)
                    dispatch(unFollow(userId))
                dispatch(toggleIsFollowing(false, userId))
            }
        )
}