import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {useParams, Navigate} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId)
            userId = this.props.authId
        this.props.getUserProfile(userId)
    }

    render () {
        debugger
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
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfile})
)(ProfileParams)


