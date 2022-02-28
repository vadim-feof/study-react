import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {unFollowTC, followTC, getUsersTC, setCurrentPage}
    from "../../redux/usersReducer";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.userCountOnPage)
    }

    onClickPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersTC(pageNumber, this.props.userCountOnPage)
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
    setCurrentPage,
    getUsersTC,
    followTC,
    unFollowTC
})
(UsersContainer)
