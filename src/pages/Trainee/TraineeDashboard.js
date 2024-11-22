// src/pages/TraineeDashboard.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import Calendar from 'react-calendar';
/*import 'react-calendar/dist/Calendar.css'; // calendar styles*/
import '../../styles/Styles.css';
import Navbar from '../../components/Navbar';

const TraineeDashboard = () => {

    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navigate = useNavigate();
    const traineeName = "Abdallah";

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };
    const [posts, setPosts] = useState([
        { id: 1, author: "Ammar", title: "New Course Available!", content: "We’ve added a new course on Data Science. Enroll now!" },
        { id: 2, author: "Yousef", title: "Assignment Due", content: "Remember to submit your assignments by the end of the week." },
    ]);



    return (
        <>
            <div>
                <Navbar />
            </div>

            <div className="ViewPage">
                <section className="welcome-section">
                    <h2>Welcome, {traineeName}!</h2>
                </section>

                {/* Information Section */}
                <section className="info-section">

                    <div className="info-box">
                        {/* Stay Updated Section */}
                       
                            <h3>Stay Updated</h3>
                            <div className="posts-container">
                                {posts.map((post) => (
                                    <div key={post.id} className="information">
                                        <h4>{post.title}</h4>
                                        <p>{post.content}</p>
                                        <small>Posted by: {post.author}</small>
                                    </div>
                                ))}
                            </div>
                        
                    </div>
                    <div className="info-box">
                        {/* <h3>calendar</h3> */}
                        <div className='post-card'>
                            {  <Calendar
                                style={{color: '#56acbb' , backgroundColor: '#56acbb', borderRadius: '8px', padding: '10px' }}
                            />}

                        </div>
                    </div>
                </section>

                {/* Cards Section */}
                <div className="dashboard-container">
                    <div className="dashboard-card">
                        <h2>Courses</h2>
                        <p>Browse or enroll in available courses.</p>
                        <Link to="/Courses" className="dashboard-link">
                            View Courses
                        </Link>
                    </div>

                    <div className="dashboard-card">
                        <h2>Certificates</h2>
                        <p>Download certificates for completed courses.</p>
                        <Link to="/certificates" className="dashboard-link">
                            View Certificates
                        </Link>
                    </div>

                    <div className="dashboard-card">
                        <h2>Feedback</h2>
                        <p>Provide feedback on your completed courses.</p>
                        <Link to="/feedback" className="dashboard-link">
                            Give Feedback
                        </Link>
                    </div>

                    <div className="dashboard-card">
                        <h2>Profile Settings</h2>
                        <p>Update your personal information.</p>
                        <Link to="/personal-info" className="dashboard-link">
                            Edit Profile
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TraineeDashboard;
