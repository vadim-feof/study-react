import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {follow, setCurrent, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollow}
    from "../../redux/usersReducer";
import axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.usersCountOnPage}`
            )
            .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setTotalUsersCount(response.data.totalCount)
                    this.props.setUsers(response.data.items)
                }
            )
    }

    onClickPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersCountOnPage}`
            )
            .then(response => {
                    this.props.toggleIsFetching(false)
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
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                isFetching={this.props.isFetching}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersCountOnPage: state.usersPage.usersCountOnPage,
        isFetching: state.usersPage.isFetching
    }
}



export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})
(UsersContainer)
