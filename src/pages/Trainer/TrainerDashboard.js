import React from 'react';
import TrainerNavbar from '../../components/TrainerNavbar';
import '../../styles/Styles.css';
import Calendar from 'react-calendar';

const TrainerDashboard = () => {
  const trainerName = "John Doe";

  return (
    <>
      <TrainerNavbar />
      <div className="ViewPage">
        <section className="welcome-section">
          <h2>Welcome, {trainerName}!</h2>
        </section>

        {/* Metrics Section */}
        <section className="quick-insights">
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
        <section className="quick-actions-section">
          
        </section>


        <section className="info-section">
        <h3>Quick Links</h3>
          <div className="quick-actions">
            <a href="/Trainer/Courses" className="quick-link">
              Manage Courses
            </a>
          </div>
          <div className="quick-actions">
            <a href="/Trainer/Reports" className="quick-link">
              Export Reports
            </a>
          </div>
          <div className="quick-actions">
            <a href="/Trainer/AddTrainee" className="quick-link">
              Add Trainee to a Course
            </a>
          </div>


        {/* Calendar Section */}
        <div className="calendar-container">
          {/* <h2>Calendar</h2> */}
          <div className="react-calendar">
            <Calendar />
          </div>
        </div>
        </section>

                {/* Upcoming Schedule Section */}
                <section className="info-section">
          <h3>Upcoming Schedule</h3>
          <div className="insight-card">
            <p><strong>React Basics</strong>: Nov 20, 10:00 AM</p>
          </div>
          <div className="insight-card">
            <p><strong>Advanced JavaScript</strong>: Nov 21, 2:00 PM</p>
          </div>
          <div className="insight-card">
            <p><strong>Database Management</strong>: Nov 22, 11:00 AM</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TrainerDashboard;
