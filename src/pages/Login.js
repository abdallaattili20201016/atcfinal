// src/Login.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Styles.css";
import { ApiRoutes } from "../constants/ApiRoutes";
import { toast } from "react-toastify";
import useFetch from "../helpers/useFetch";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [response, request] = useFetch({
    endpoint: ApiRoutes.Login,
    method: "POST",
    body: {
      username: username,
      password: password,
    },
    onFinish: async ({ data, status, error, message }) => {
      toast.dismiss();
    
      if (error && status !== 200) {
        toast.error("Error: " + error);
        return;
      }
    
      if (message && status !== 200) {
        toast.warning("Error: " + message);
        return;
      }
    
      if (data || status === 200) {
        localStorage.setItem("token", data.token);
        toast.success("Login successful. Fetching user info...");
        
        window.location.reload();
      } else {
        toast.error("Something went wrong. Please try again.");
        return;
      }
    },
    
  });

  const [responseGetUserInfo, requestGetUserInfo] = useFetch({
    endpoint: ApiRoutes.GetUserInfo,
    onFinish: ({ data, status, error, message }) => {
      toast.dismiss();
      if (error && status !== 200) {
        toast.error("Error: " + error);
        return;
      }
      if (message && status !== 200) {
        toast.error("Message: " + message);
        return;
      }
      if (data || status === 200) {
        toast.success(message);
        localStorage.setItem("user", JSON.stringify(data));
        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== null) {
          if (user.role === "admin") {
            navigate("/admin", { replace: true });
          } else if (user.role === "trainee") {
            navigate("/dashboard", { replace: true });
          } else {
            navigate("/Trainer/TrainerDashboard", { replace: true });
          }
        } else {
          toast.error("User information could not be loaded. Please try again.");
        }
      } else toast.error("Something went wrong. Please try again.");
      return;
    },
  });

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      requestGetUserInfo();
    }
  }, [requestGetUserInfo]);

  return (
    <>
      <div className="allContent">
        <div className="fancyBG">
          {/* <img src="/logoo.jpg" alt="Logo" className="logo-image" /> */}
          <span className="header-text">
            Academic
            <br />
            <br />
            Training
            <br />
            <br /> Center
          </span>
        </div>
        <div className="contentDiv">
          <div className="login-container">
            <h2 className="loginTitle">Login</h2>
            <form
              className="loginForm"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent page reload
                request(); // Trigger the request
              }}
            >
              <div className="form-group">
                <label className="loginLabel">Username</label>
                <input
                  type="text"
                  name="username"
                  className="loginInput"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />

                <label className="loginLabel">Password</label>
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
              <button type="submit" className="btn-primary" class="loginButton">
                Login
              </button>

              <div className="extra-buttons">
                <a href="/forgot-password" className="forgot-password">
                  Forgot Password?
                </a>
                <a href="/signup" className="sign-up">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
