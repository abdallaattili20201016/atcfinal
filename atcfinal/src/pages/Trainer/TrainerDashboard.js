import React from "react";
import TrainerNavbar from "../../components/TrainerNavbar";
import "../../styles/Styles.css";
import Calendar from "react-calendar";

const TrainerDashboard = () => {
  const trainerName = "John Doe";

  return (
    <>
      <TrainerNavbar />
      <div className="ViewPage">
        {/* Welcome Section */}
        <section className="welcome-section">
          <h2>Welcome, {trainerName}!</h2>
        </section>

        {/* Metrics Section */}
        <section className="quick-insights">
          <h3 className="section-title">Key Metrics</h3>
          <div className="insight-card">
            <h3>Total Courses</h3>
            <p>5</p>
          </div>
          <div className="insight-card">
            <h3>Total Trainees</h3>
            <p>45</p>
          </div>
          <div className="insight-card">
            <h3>Upcoming Classes</h3>
            <p>3</p>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="info-section">
          <h3 className="section-title">Quick Links</h3>
          <div className="quick-actions">
            <a href="/Trainer/Courses" className="action-btn">
              Manage Courses
            </a>
            <a href="/Trainer/Reports" className="action-btn">
              Export Reports
            </a>
            <a href="/Trainer/AddTrainee" className="action-btn">
              Add Trainee
            </a>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="info-section calendar-section">
          <h3 className="section-title">Trainer Calendar</h3>
          <div className="calendar-container">
            <Calendar />
          </div>
        </section>

        {/* Upcoming Schedule Section */}
        <section className="info-section">
          <h3 className="section-title">Upcoming Schedule</h3>
          <div className="schedule-card">
            <p>
              <strong>React Basics</strong>: Nov 20, 10:00 AM
            </p>
          </div>
          <div className="schedule-card">
            <p>
              <strong>Advanced JavaScript</strong>: Nov 21, 2:00 PM
            </p>
          </div>
          <div className="schedule-card">
            <p>
              <strong>Database Management</strong>: Nov 22, 11:00 AM
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TrainerDashboard;
