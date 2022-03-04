import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, updateUserStatus, getUserStatus} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId)
            userId = this.props.authId
        if (userId) {
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.authId !== this.props.authId) {
            this.props.getUserProfile(this.props.authId)
            this.props.getUserStatus(this.props.authId)
        }
    }

    render () {
        return (
            <Profile {...this.props}/>
        )
    }
}

const ProfileParams = (props) => {
    let params = useParams()
    return (
        <ProfileContainer
            {...props}
            params={params}
        />
    );
}


const mapStateToProps = (state) => {
    return {
        ...state.profilePage,
        authId: state.authData.data.id
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, updateUserStatus, getUserStatus})
)(ProfileParams)


