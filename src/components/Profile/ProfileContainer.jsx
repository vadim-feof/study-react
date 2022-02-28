import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId)
            userId = 22664
        this.props.getUserProfile(userId)
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
    }
}

export default connect(mapStateToProps, {
    getUserProfile
})(ProfileParams)

