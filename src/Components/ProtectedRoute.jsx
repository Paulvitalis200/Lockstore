import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

const ProtectedRoute = ({ component: Component, auth, ...rest}) => {
    return (
        <Route {...rest}
        render={ props => 
            auth.isAuthenticated ? (
                <Component {...props} />
            ) 
            : (<Redirect to="/" />)}
             />
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
   
}
export default connect(mapStateToProps)(ProtectedRoute);