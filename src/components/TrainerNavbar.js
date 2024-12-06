// src/components/AdminNavbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Styles.css"; // Adjust the path as needed

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear(); // Clear stored data
    navigate("/Login"); // Redirect to login page
  };

  return (
    <div
      className={`sideNav  ${drawerOpen ? "open" : ""}`}
      style={{
        background: "linear-gradient(to bottom right, #56c596, #004d40)",
      }}
    >
      <div className="logo">
        <h1 className="txtLogo">
          <Link to="/Trainer/TrainerDashboard" className="txtLogo">
            <h1 className="txtLogo">Academic Training Center</h1>
          </Link>
        </h1>
      </div>
      <div class="listOfItems">
        <ul class="mainUnorderdList">
          <li class="navItem">
            <a href="/Trainer/ViewProfileTrainer">
              <span role="img" aria-label="profile">
                👤
              </span>
              Profile Settings
            </a>
          </li>
          <li class="navItem">
            <a href="/Trainer/TrainerAnnouncements">
              <span role="img" aria-label="announcements">
                📢
              </span>
              Announcements
            </a>
          </li>
          <li class="navItem">
            <a href="/Trainer/TrainerCourses">
              <span role="img" aria-label="courses">
                📚
              </span>
              Course
            </a>
          </li>
          <li class="navItem">
            <a href="/Trainer/TrainerReports">
              <span role="img" aria-label="reports">
                📊
              </span>
              Reports
            </a>
          </li>
          <li class="navItem">
            <a href="/Trainer/TrainerMessages">
              <span role="img" aria-label="Messages">
                👥
              </span>
              Messages
            </a>
          </li>
          <li class="navItem">
            <a
              href="/login"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
              }}
            >
              <span role="img" aria-label="logout">
                🔓
              </span>
              logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
