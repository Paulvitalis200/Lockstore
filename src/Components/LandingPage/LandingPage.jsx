import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import landing from '../../assets/images/landing.jpg';
import './landing.css';
import loginUser from '../../store/actions/loginUser'
import { useForm } from 'react-hook-form';

const LandingPage = (props) => {
    const { register, handleSubmit, errors } = useForm();

    const [formError, setFormError] = useState();
    const [isLoading, setLoading] = useState(props.auth.loading)

    useEffect(() => {
        if (props.auth.isError) {
            setFormError(props.auth.message)
            setLoading(false)
            return
        }
        setFormError('')
    }, [props])

    const onSubmit = (data) => {
        setLoading(true)
        console.log("Agian")
        props.loginUser(data)
    }

    return (
        <div className="home">
            <div className="landingImageDiv">
                <img className="landingImage" src={landing} alt=""/>
            </div>
            <div className="home-sub">
                <div className="login-div">
                    <div>
                        <h1 className="loginHeader">Log In</h1>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="loginForm">
                                <input type="text" name="email" placeholder="Email" ref={register({required: true})} />
                                {errors.email && <p>Email is required.</p>}
                                <input type="text" name="password" placeholder="Password" ref={register({required: true})} />
                                {errors.password && <p>Password is required.</p>}
                                {formError && <p>{formError}</p>}
                            </div>
                            <button className="login-btn">
                                {isLoading && <div id='mini-loader'></div>}
                                LOG IN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(loginUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
