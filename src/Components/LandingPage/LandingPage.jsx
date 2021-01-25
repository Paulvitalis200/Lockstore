import React from 'react';
import { connect } from 'react-redux';
import landing from '../../assets/images/landing.jpg';
import './landing.css';
import loginUser from '../../store/actions/loginUser'

const LandingPage = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      email: 'vitalispaul48@live.com',
      password: 'manu2012'
    }
    console.log(payload)
    props.loginUser(payload)
  }
  
  console.log(props)
    return (
        <div className="home">
            <div className="landingImageDiv">
                <img className="landingImage" src={landing} alt=""/>
            </div>
            <div className="home-sub">
              <div className="login-div">
                <div>
                  <h1 className="loginHeader">Log In</h1>
                  <form onSubmit={handleSubmit}>
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
    loginUser: data => dispatch(loginUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
