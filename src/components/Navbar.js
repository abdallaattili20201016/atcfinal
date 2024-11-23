// src/components/Navbar.js
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
        <div className={`sideNav ${drawerOpen ? 'open' : ''}`}>
            <div className="logo">
                <h1 className="txtLogo"><a href="/dashboard" className="txtLogo">Academic Training Center</a></h1>
            </div>
            <div class="listOfItems">
                    <ul class="mainUnorderdList">
                        <li class="navItem"><a href="/ViewProfile">Profile Settings</a></li>
                        <li class="navItem"><a href="/Messages">Messages</a></li>
                        <li class="navItem"><a href="/courses">Courses</a></li>
                        <li class="navItem"><a href="/MyCourses">My Courses</a></li>
                        <li class="navItem"><a href="/FinishCoures">Finish Coures</a></li>
                        <li class="navItem"><a href="/certificates">Certificates</a></li>
                        <li class="navItem"><a href="/PaymentPage">Payment</a></li>
                        <li class="navItem"><a href="/AboutUs">About Us</a></li>
                        <li class="navItem"><a href="/contact-us">Contact Us</a></li>
                        <li class="navItem"><a href="/login">logout</a></li>
                    </ul>
                </div>

        </div>
    );
};

export default Navbar;
