import React, { useState } from "react";
import "../../styles/Styles.css";
import TrainerNavbar from "../../components/TrainerNavbar";
import WarningOverlay from "../../components/WarningOverlay";

const ViewProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "0791234567",
    address: "Amman",
  });

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [saveConfirmationVisible, setSaveConfirmationVisible] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);
  const [errors, setErrors] = useState({}); // To track validation errors

  const handleEdit = () => {
    setEditedProfile(profile);
    setIsOverlayVisible(true);
    setErrors({});
  };

  const validateFields = () => {
    const newErrors = {};

    // Validate Name
    if (!/^[a-zA-Z\s]+$/.test(editedProfile.name)) {
      newErrors.name = "Name must contain only letters.";
    }

    // Validate Email
    if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(editedProfile.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Validate Phone
    if (!/^\d{10}$/.test(editedProfile.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    return newErrors;
  };

  const handleSave = () => {
    const newErrors = validateFields();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setProfile(editedProfile);
      setIsOverlayVisible(false);
      setSaveConfirmationVisible(true);
    }
  };

  const handleCancel = () => {
    setIsOverlayVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleSaveConfirmationClose = () => {
    setSaveConfirmationVisible(false); // Hide the save confirmation overlay
  };

  return (
    <>
      <TrainerNavbar />
      <div className="ViewPage">
        <div className="profile-content">
          <h3>Personal Info</h3>
          <div className="userImage"></div>
          <p>
            <strong>Name:</strong> <span>{profile.name}</span>
          </p>
          <p>
            <strong>Email:</strong> <span>{profile.email}</span>
          </p>
          <p>
            <strong>Phone:</strong> <span>{profile.phone}</span>
          </p>
          <p>
            <strong>Address:</strong> <span>{profile.address}</span>
          </p>
          <div className="actions">
            <button onClick={handleEdit} className="edit-btn">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for Editing Profile */}
      {isOverlayVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-button" onClick={handleCancel}>
              ✖
            </button>
            <h2>Edit Profile</h2>
            <form>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={editedProfile.name}
                  onChange={handleInputChange}
                  required
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={editedProfile.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={editedProfile.phone}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && <p className="error-text">{errors.phone}</p>}
              </label>
              <label>
                Address:
                <select
                  name="address"
                  value={editedProfile.address}
                  onChange={handleInputChange}
                >
                  <option value="Amman">Amman</option>
                  <option value="Zarqa">Zarqa</option>
                  <option value="Irbid">Irbid</option>
                  <option value="Aqaba">Aqaba</option>
                  <option value="Mafraq">Mafraq</option>
                  <option value="Ajloun">Ajloun</option>
                  <option value="Jerash">Jerash</option>
                  <option value="Madaba">Madaba</option>
                  <option value="Karak">Karak</option>
                  <option value="Tafilah">Tafilah</option>
                  <option value="Ma'an">Ma'an</option>
                  <option value="Balqa">Balqa</option>
                </select>
              </label>
            </form>
            <div className="form-actions">
              <button className="primary-button" onClick={handleSave}>
                Save
              </button>
              <button className="secondary-button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Save Confirmation Overlay */}
      {saveConfirmationVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>Profile Updated!</h2>
            <p>Your changes have been saved successfully.</p>
            <button
              className="primary-button"
              onClick={handleSaveConfirmationClose}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewProfile;