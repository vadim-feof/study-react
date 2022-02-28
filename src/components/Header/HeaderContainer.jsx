import React, {Component} from 'react';
import Header from "./Header";
import {getAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getAuthUserData()
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
    getAuthUserData
})(HeaderContainer)