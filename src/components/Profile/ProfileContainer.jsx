import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileData} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.params.userId
        if (!userId) userId = 22664
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
            )
            .then(response => {
                    this.props.setUserProfileData(response.data)
                }
            )
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
        authUserId: state.authData.data.id,
        isAuth: state.authData.isAuth
    }
}

export default connect(mapStateToProps, {
    setUserProfileData
})(ProfileParams)

