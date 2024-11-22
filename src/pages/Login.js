// src/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Styles.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in:', { username, password });

        // Determine role based on username prefix
        if (username.startsWith('1')) {
            navigate('/admin'); // Redirect to admin dashboard
        } else if (username.startsWith('2')) {
            navigate('/dashboard'); // Redirect to trainee dashboard
        } else if (username.startsWith('3')) {
            navigate('/Trainer/TrainerDashboard'); // Redirect to trainer dashboard
        } else {
            alert('Invalid username prefix. Please enter a correct username.');
        }
    };

    return (
        <>
            <div className="allContent">
                <div className="fancyBG">
                    <img src="/logoo.jpg" alt="Logo" className="logo-image" />
                    <span className="header-text">
                        Academic<br /><br />Training<br /><br /> Center
                    </span>
                </div>
                <div className="contentDiv">
                    <div className="login-container">
                        <h2 className="loginTitle">Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label className="loginLabel">Username:</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="loginInput"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter your username"
                                    required
                                />

                                <label className="loginLabel">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="loginInput"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-primary">Login</button>

                            <div className="extra-buttons">
                                <Link to="/forgot-password" className="forgot-password">
                                    Forgot Password?
                                </Link>
                                <Link to="/signup" className="sign-up">
                                    Sign Up
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
