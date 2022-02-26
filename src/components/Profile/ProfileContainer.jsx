import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileData} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/2`
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

const mapStateToProps = (state) => {
    return {
        ...state.profilePage
    }
}

export default connect(mapStateToProps, {
    setUserProfileData
})(ProfileContainer)

