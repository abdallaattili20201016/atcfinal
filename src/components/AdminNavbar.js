// src/components/AdminNavbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Styles.css'; // Adjust the path as needed

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear(); // Clear stored data
        navigate('/Login'); // Redirect to login page
    };

    return (
        <div className={`sideNav  ${drawerOpen ? 'open' : ''}`}
            style={{
                background: 'linear-gradient(to bottom right, #586daf, #4f4f4f)',
            }}>
            <div className="logo">
                <h1 className="txtLogo">
                    <Link to="/admin" className="txtLogo">
                        <h1 className="txtLogo">Academic Training Center</h1>
                    </Link></h1>
            </div>
            <div class="listOfItems">
                <ul class="mainUnorderdList">
                    <li class="navItem"><a href="/ViewProfileAdmin"><span role="img" aria-label="profile">👤</span>Profile Settings</a></li>
                    <li class="navItem"><a href="/Admin/Announcements"><span role="img" aria-label="announcements">📢</span>Announcements</a></li>
                    <li class="navItem"><a href="/Admin/CourseManagement"><span role="img" aria-label="courses">📚</span>Course Management</a></li>
                    <li class="navItem"><a href="/Admin/Reports"><span role="img" aria-label="reports">📊</span>Reports</a></li>
                    <li class="navItem"><a href="/Admin/Users"><span role="img" aria-label="users">👥</span>Users</a></li>
                    <li class="navItem"><a href="/login"><span role="img" aria-label="logout">🔓</span>logout</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;



