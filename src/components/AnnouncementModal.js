// src/components/AnnouncementModal.js
import React, { useState } from 'react';



const AnnouncementModal = ({ announcement, onSave, onClose }) => {
    const [title, setTitle] = useState(announcement?.title || '');
    const [description, setDescription] = useState(announcement?.description || '');
    const [date, setDate] = useState(announcement?.date || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ title, description, date });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{announcement ? 'Edit Announcement' : 'Add Announcement'}</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="input-field"
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            className="input-field"
                        ></textarea>
                    </label>
                    <label>
                        Date:
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="input-field"
                        />
                    </label>
                    <div className="modal-actions">
                        <button type="edit-btn" className="primary-button">Save</button>
                        <button type="edit-btn" className="secondary-button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AnnouncementModal;
