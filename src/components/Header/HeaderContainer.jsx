import React, {Component} from 'react';
import Header from "./Header";
import {setAuthData} from "../../redux/authReducer";
import {connect} from "react-redux";
import axios from "axios";

class HeaderContainer extends Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}
            )
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthData({...response.data.data})
                }
            }
            )
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authData: state.authData.data,
        isAuth: state.authData.isAuth
    }
}

export default connect(mapStateToProps, {
    setAuthData
})(HeaderContainer)