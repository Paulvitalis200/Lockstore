import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import landing from '../../assets/images/landing.jpg';
import './landing.css';
import loginUser from '../../store/actions/loginUser'
import { useForm } from "react-hook-form";

const LandingPage = (props) => {

  const { register, handleSubmit, errors } = useForm();
  const [formMessage, setMessage] = useState('')

  useEffect(() => {
    console.log(props)
    if (props.auth.isAuthenticated) {
      setMessage(props.auth.message)
      setTimeout(() => {
        props.history.push('/dashboard')
      }, 3000) 
    }
  }, [props, props.auth, props.errors, props.history])

  useEffect(() => {
    if(props.auth.isError) {
      setMessage(props.auth.message)
    }
  }, [props, props.auth.isError])

  const onSubmit = (data) => {
    console.log(data)
    props.loginUser(data)
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="loginForm">
                      <input type="text" placeholder="Email" name="email" ref={register({required: true})}/>
                      {errors.password && <p>Email is required</p>}
                      <input type="password" placeholder="Password" name="password" ref={register({required: true})}/>
                      {formMessage && <p>{formMessage}</p>}
                      <button type="submit"className="login-btn">LOG IN</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: data => dispatch(loginUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
