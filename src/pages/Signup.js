// src/Signup.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Styles.css"; // Adjust path to point to styles folder
import { toast } from "react-toastify";
import { API_URL } from "../constants/config";
import { ApiRoutes } from "../constants/ApiRoutes";
import useFetch from "../helpers/useFetch";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const [response, request] = useFetch({
    endpoint: ApiRoutes.Register,
    method: "POST",
    body: {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    },
    onFinish: ({ data, status, error, message }) => {
      toast.dismiss();
      if (error && status != 200) {
        toast.error("Error: " + error);
        return;
      }
      if (message && status != 200) {
        toast.error("Error: " + message);
        return;
      }

      if (data || status == 200) {
        if (message) {
          toast.success(message);
        }
        // localStorage.setItem("token", data);
        navigate("/login");
      } else {
        toast.error("Something went wrong. Please try again.");
        return;
      }
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("All fields are required!");
    } else {
      request();
      toast.loading("Registering User");
    }
  };

  const validateForm = () => {
    const { name, username, email, password } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !username || !email || !password) {
      return false;
    }
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address!");
      return false;
    }

    return true;
  };

  return (
    <>
      <div class="allContent">
        <div class="fancyBG">
          {/* <img src="/logoo.jpg" alt="Logo" class="logo-image" /> */}
          <span class="header-text">
            Academic<br></br>
            <br></br>Training<br></br>
            <br></br> Center
          </span>
        </div>
        <div class="contentDiv">
          <div className="login-container">
            <h2 class="loginTitle">SignUp</h2>
            <form onSubmit={handleSubmit} className="loginForm">
            <div className="form-group">
            <label className="loginLabel">Student Name</label>
              <input
                type="text"
                name="name"
                class="loginInput"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <label className="loginLabel">Username</label>
              <input
                type="text"
                name="username"
                class="loginInput"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <label className="loginLabel">Email</label>
              <input
                type="email"
                name="email"
                class="loginInput"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              <label className="loginLabel">Password</label>
              <input
                type="password"
                name="password"
                class="loginInput"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
              />

              <div className="admin-contact">
                Are you a Trainer? <a href="/admin-contact">Contact an admin</a>
              </div>
              </div>
              <button type="submit" class="loginButton">
                Verify
              </button>
            </form>
            {message && <p>{message}</p>}
            <p class="havAnAccount">
              Already have an account? <Link to="/" >Login</Link>{" "}
              {/* Use Link for navigation */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
