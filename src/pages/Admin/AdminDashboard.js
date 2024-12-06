// src/pages/Admin/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import '../../styles/Styles.css';
import Calendar from 'react-calendar';
import DashboardAnnouncements from '../../components/DashboardAnnouncements.js'; // Import Announcements component
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [adminName, setAdminName] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
      setAdminName(user.name);
    }
  }, []);

  const [announcements] = useState([
    {
      id: 1,
      title: "System Maintenance Scheduled",
      description: "The system will be down on Nov 20 for 2 hours.",
      date: "2024-11-20",
    },
    {
      id: 2,
      title: "New Course Available: Data Science",
      description: "Enroll now for the Data Science course starting Nov 25.",
      date: "2024-11-18",
    },
    {
      id: 3,
      title: "Important Deadline: Registration Ends",
      description: "Register before Nov 16 to secure your seat.",
      date: "2024-11-16",
    },
  ]);

  const recentActivity = [
    "John Doe added a new course: React Basics",
    "Jane Smith registered as a Trainee",
    "System Maintenance announcement created",
  ];

  const upcomingEvents = [
    "React Basics course starts on 2024-11-20",
    "Data Science course starts on 2024-11-25",
  ];

  return (
    <>
      <AdminNavbar />
      <div className="ViewPage">
        {/* Welcome Section */}
        <section className="welcome-section">
          <h2>Welcome, {adminName}!</h2>
        </section>

        {/* Quick Insights Section */}
        <section className="quick-insights">
          <div className="insight-card">
            <h2>Total Trainers</h2>
            <p>20</p>
          </div>
          <div className="insight-card">
            <h2>Total Trainees</h2>
            <p>120</p>
          </div>
          <div className="insight-card">
            <h2>Active Courses</h2>
            <p>15</p>
          </div>
          <div className="insight-card">
            <h2>Monthly Revenue</h2>
            <p>$5,000</p>
          </div>
        </section>

        {/* Announcements and Calendar */}
        <section className="info-section">
          {/* Announcements Div */}
          <div className="posts-container">
            <h2>Announcements</h2>
            <DashboardAnnouncements announcements={announcements} />
          </div>

          {/* Calendar Section */}
          <div className="calendar-container">
            {/* <h2>Calendar</h2> */}
            <div className="react-calendar">
              <Calendar />
            </div>
          </div>
        </section>

        {/* Recent Activity Section */}
        <div className="posts-container">
          <h2>Recent Activity</h2>
          <div >
            {recentActivity.map((activity, index) => (
              <span class="information">
                <li key={index}>
                  <p>{activity}</p>
                </li>
              </span>
            ))}
          </div>
        </div>

        {/* Upcoming Events Section */}
        <section className="announcements-container">
          <ul className="info-box">
            <h2>Upcoming Events</h2>
            {upcomingEvents.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </section>

        {/* Quick Actions Section */}
        <section className="quick-actions-section">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            <Link to="/Admin/CourseManagement" className="action-btn">Add New Course</Link>
            <Link to="/Admin/Reports" className="action-btn">View Reports</Link>
            <Link to="/Admin/Users" className="action-btn">Manage Users</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminDashboard;