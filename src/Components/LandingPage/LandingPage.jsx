import React from 'react';
import { connect } from 'react-redux';
import landing from '../../assets/images/landing.jpg';
import './landing.css';
import loginUser from '../../store/actions/loginUser'

const LandingPage = () => {
    return (
        <div className="home">
            <div className="landingImageDiv">
                <img className="landingImage" src={landing} alt=""/>
            </div>
            <div className="home-sub">
                <div className="login-div">
                    <div>
                        <h1 className="loginHeader">Log In</h1>
                        <form>
                            <div className="loginForm">
                                <input placeholder="Email"/>
                                <input placeholder="Password"/>
                            </div>
                            <button className="login-btn">LOG IN</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: () => dispatch(loginUser)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
