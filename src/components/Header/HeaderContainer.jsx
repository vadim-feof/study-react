import React, {Component} from 'react';
import Header from "./Header";
import {setAuthData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";

class HeaderContainer extends Component {
    componentDidMount() {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthData({...data.data})
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