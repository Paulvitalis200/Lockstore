import React from 'react';
import landing from '../../assets/images/landing.jpg';
import './landing.css';

const LandingPage = () => {
    return (
        <div className="home">
            <div className="landingImageDiv">
                <img className="landingImage" src={landing} alt="Landing image"/>
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

export default LandingPage;
