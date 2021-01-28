import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({component: Component, auth, ...rest}) => {
    console.log(auth)
    return (
        <Route {...rest}
        render={ props => {
            // console.log(props)
            // debugger
            console.log(props)
            auth.isAuthenticated === true ?
            (<Component {...props} />) : (
                <Redirect to="/" />
            )
        }
            }
        />
    )
}

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute);