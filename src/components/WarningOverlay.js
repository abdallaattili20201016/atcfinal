// src/components/WarningOverlay.js
import React from 'react';
import '../styles/Styles.css';

const WarningOverlay = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>Warning</h2>
        <p>{message}</p>
        <div className="form-actions">
          <button className="primary-button" onClick={onConfirm}>
            Confirm
          </button>
          <button className="secondary-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningOverlay;
