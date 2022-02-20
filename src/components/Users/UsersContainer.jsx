import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../redux/usersReducer";

const mapStateToProps = (state) => (
    {
        users: state.usersPage.users
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onClickFollowBtn: (userId) => {
            dispatch(followActionCreator(userId))
        },
        onClickUnFollowBtn: (userId) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
)

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer