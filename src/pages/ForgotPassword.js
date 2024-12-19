// src/ForgotPassword.js
import React, { useState } from 'react';
import '../styles/Styles.css'; // Import the CSS for styling
import "../styles/ResponStyles.css";


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setMessage('Password reset instructions have been sent to your email.');
        } else {
            setMessage('Please enter a valid email address.');
        }
    };

    return (
        <>
        <div className="allContent">
        <div className="fancyBG">
          {/* <img src="/logoo.jpg" alt="Logo" className="logo-image" /> */}
          <span className="header-text">
          <span></span>
            <span>Academic</span>
            <span>Training</span>
            <span>Center</span>
            <span></span>
            <span></span>

          </span>
        </div>
        <div className="contentDiv">
        <div className="login-container">
        
            <h2 className="loginTitle">Forgot Password</h2>
            <form onSubmit={handleSubmit} className="loginForm">
            <div className="form-group">
            <label className="loginLabel">Enter your email</label>
                <input
                    type="email"
                    className="loginInput"
                    placeholder="example@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                <button type="submit" class="loginButton">Send Reset Instructions</button>
            </form>
            {message && <p>{message}</p>}
        </div>
        </div>
        </div>
        </>
    );
};

export default ForgotPassword;
