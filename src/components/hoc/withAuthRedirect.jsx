import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    /*
    // else maybe used func component:
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props}/>
    }
    */
    let ConnectedAuthRedirectComponent = connect(mapStateToProps, {})(RedirectComponent);

    return ConnectedAuthRedirectComponent
};

const mapStateToProps = (state) => ({
    isAuth: state.authData.isAuth
})

export default withAuthRedirect
