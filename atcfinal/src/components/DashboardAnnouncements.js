// src/components/DashboardAnnouncements.js
import React from "react";
import { Link } from "react-router-dom";

const DashboardAnnouncements = ({ announcements }) => {
  const currentDate = new Date();

  // Filter announcements from the last 7 days
  const recentAnnouncements = announcements.filter((announcement) => {
    const announcementDate = new Date(announcement.date);
    const diffInDays = (currentDate - announcementDate) / (1000 * 60 * 60 * 24);
    return diffInDays <= 7; // Announcements from the last 7 days
  });

  return (
    <div className="announcements-container">
      <h2>Announcements</h2>
      <ul>
        {recentAnnouncements.length > 0 ? (
          recentAnnouncements.map((announcement) => (
            <li key={announcement.id}>
              <strong>{announcement.date}:</strong> {announcement.title}
            </li>
          ))
        ) : (
          <p>No recent announcements.</p>
        )}
      </ul>
      <Link to="/announcements" className="view-all-link">
        View All Announcements
      </Link>
    </div>
  );
};

export default DashboardAnnouncements;
