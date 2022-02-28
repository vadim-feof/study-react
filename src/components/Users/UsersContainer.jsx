import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, toggleIsFollowing, unFollow}
    from "../../redux/usersReducer";
import {userAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.usersCountonPage)
            .then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setTotalUsersCount(data.totalCount)
                    this.props.setUsers(data.items)
                })
    }

    onClickPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        userAPI.getUsers(pageNumber, this.props.usersCountonPage)
            .then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                }
            )
    }

    render () {
        return (
            <Users {...this.props} onClickPage={this.onClickPage}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersCountOnPage: state.usersPage.usersCountOnPage,
        isFetching: state.usersPage.isFetching,
        followUsersQueue: state.usersPage.followUsersQueue
    }
}



export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowing
})
(UsersContainer)
