import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../redux/usersReducer";
import axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.usersCountOnPage}`
            )
            .then(response => {
                    this.props.setTotalUsersCount(response.data.totalCount)
                    this.props.setUsers(response.data.items)
                }
            )
    }

    onClickPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersCountOnPage}`
            )
            .then(response => {
                    this.props.setUsers(response.data.items)
                }
            )
    }

    render () {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                usersCountOnPage={this.props.usersCountOnPage}
                currentPage={this.props.currentPage}
                onClickPage={this.onClickPage}
                users={this.props.users}
                onClickFollowBtn={this.props.onClickFollowBtn}
                onClickUnFollowBtn={this.props.onClickUnFollowBtn}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage:state.usersPage.currentPage,
        totalUsersCount:state.usersPage.totalUsersCount,
        usersCountOnPage:state.usersPage.usersCountOnPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickFollowBtn: (userId) => {
            dispatch(followActionCreator(userId))
        },
        onClickUnFollowBtn: (userId) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
