// src/components/CourseModal.js
import React, { useState } from "react";

const CourseModal = ({ course, onSave, onClose }) => {
  const [name, setName] = useState(course?.name || "");
  const [trainer, setTrainer] = useState(course?.trainer || "");
  const [startDate, setStartDate] = useState(course?.startDate || "");
  const [endDate, setEndDate] = useState(course?.endDate || "");
  const [status, setStatus] = useState(course?.status || "Active");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, trainer, startDate, endDate, status });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{course ? "Edit Course" : "Add Course"}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Trainer:
            <input
              type="text"
              value={trainer}
              onChange={(e) => setTrainer(e.target.value)}
              required
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </label>
          <label>
            Status:
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <div className="modal-actions">
            <button type="edit-btn">Save</button>
            <button type="edit-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseModal;
