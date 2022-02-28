import React, {Component} from 'react';
import Header from "./Header";
import {authMeTC} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.authMeTC()
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
    authMeTC
})(HeaderContainer)