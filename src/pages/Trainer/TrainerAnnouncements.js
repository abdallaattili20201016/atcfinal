// src/pages/Admin/AnnouncementsPage.js
import React, { useState } from 'react';
import TrainerNavbar from '../../components/TrainerNavbar';
import WarningOverlay from '../../components/WarningOverlay';
import '../../styles/Styles.css';

const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState([
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

  const [filter, setFilter] = useState('');
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    description: '',
    date: '',
  });

  /*** WarningOverlay State and Handlers (GROUPED) ***/
  const [warningOverlayVisible, setWarningOverlayVisible] = useState(false);
  const [announcementToDelete, setAnnouncementToDelete] = useState(null);

  const handleDeleteRequest = (announcementId) => {
    setAnnouncementToDelete(announcementId);
    setWarningOverlayVisible(true);
  };

  const handleDeleteConfirm = () => {
    setAnnouncements(announcements.filter((a) => a.id !== announcementToDelete));
    setWarningOverlayVisible(false);
    setAnnouncementToDelete(null);
  };

  const handleDeleteCancel = () => {
    setWarningOverlayVisible(false);
    setAnnouncementToDelete(null);
  };
  /*** End WarningOverlay State and Handlers ***/

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement({ ...newAnnouncement, [name]: value });
  };

  const handleAdd = () => {
    setEditingAnnouncement(null);
    setNewAnnouncement({ title: '', description: '', date: '' });
    setIsOverlayVisible(true);
  };

  const handleEdit = (announcement) => {
    setEditingAnnouncement(announcement);
    setNewAnnouncement(announcement);
    setIsOverlayVisible(true);
  };

  const handleSave = () => {
    if (editingAnnouncement) {
      // Update existing announcement
      setAnnouncements(
        announcements.map((a) =>
          a.id === editingAnnouncement.id ? { ...editingAnnouncement, ...newAnnouncement } : a
        )
      );
    } else {
      // Add new announcement
      setAnnouncements([...announcements, { id: Date.now(), ...newAnnouncement }]);
    }
    setIsOverlayVisible(false);
  };

  return (
    <>
      <TrainerNavbar />
      <div className="ViewPage announcPage" >
      <center><h1 class="pageTitle">Announcements</h1></center>
          <div className="actions">
            <input
              type="text"
              placeholder="Search announcements..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="input-field"
            />
            <button className="edit-btn" onClick={handleAdd}>
              Add Announcement
            </button>
          </div>
        
        <div>
          <table className="annTable">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {announcements
                .filter((announcement) =>
                  announcement.title.toLowerCase().includes(filter.toLowerCase())
                )
                .map((announcement) => (
                  <tr key={announcement.id}>
                    <td>{announcement.title}</td>
                    <td>{announcement.description}</td>
                    <td>{announcement.date}</td>
                    <td>
                      <button className="tbl-action-btn" onClick={() => handleEdit(announcement)}>
                        Edit
                      </button>
                      <button
                        className="tbl-action-btn"
                        onClick={() => handleDeleteRequest(announcement.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Full-Page Overlay for Adding/Editing Announcement */}
        {isOverlayVisible && (
          <div className="overlay">
            <div className="overlay-content">
              <button className="close-button" onClick={() => setIsOverlayVisible(false)}>
                ✖
              </button>
              <h2>{editingAnnouncement ? 'Edit Announcement' : 'Add Announcement'}</h2>
              <form>
                <label>
                  Title:
                  <input
                    type="text"
                    name="title"
                    value={newAnnouncement.title}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    name="description"
                    value={newAnnouncement.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </label>
                <label>
                  Date:
                  <input
                    type="date"
                    name="date"
                    value={newAnnouncement.date}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </form>
              <div className="form-actions">
                <button className="primary-button" onClick={handleSave}>
                  Save
                </button>
                <button className="secondary-button" onClick={() => setIsOverlayVisible(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Warning Overlay for Deleting Announcement */}
        {warningOverlayVisible && (
          <WarningOverlay
            message="Are you sure you want to delete this announcement?"
            onConfirm={handleDeleteConfirm}
            onCancel={handleDeleteCancel}
          />
        )}
      </div>
    </>
  );
};

export default AnnouncementsPage;
