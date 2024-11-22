// src/pages/ViewProfile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Styles.css';
import AdminNavbar from '../../components/AdminNavbar';

const ViewProfileAdmin = () => {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('+962 7');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const handleEditToggle = () => setEditMode(!editMode);

    const handleSave = () => {
        if (!validateEmail(email)) {
            alert('Please enter a valid email address (must contain "@" and end with ".com").');
            return;
        }
        setEditMode(false);
        alert('Your information has been updated.');
    };

    const handleCancel = () => setEditMode(false);

    const handleNameChange = (e) => {
        const value = e.target.value;
        // Only allow letters and spaces
        if (/^[a-zA-Z\s]*$/.test(value)) {
            setName(value);
        }
        
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        // Only allow digits and ensure it doesn't exceed 13 characters
        if (/^\d{0,12}$/.test(value.replace(/[^0-9]/g, ''))) {
            setPhone(value);
              
        } 
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value); 
    };

    const validateEmail = (email) => {
        // Regex to validate email (must contain "@" and ".com")
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <>
            <AdminNavbar />
            <div className="ViewPage">
                <div className="profile-content">
                    <div className="user-info">
                        <h3>Personal Info</h3>
                        <div className="userImage"></div>
                        
                        <p>
                            <strong>Name:</strong> {editMode ? (
                                <input
                                    type="text"
                                    className="profileInput"
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            ) : (
                                <span>{name}</span>
                            )}
                        </p>

                        <p>
                            <strong>Email:</strong> {editMode ? (
                                <input
                                    type="email"
                                    className="profileInput"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            ) : (
                                <span>{email}</span>
                            )}
                        </p>

                        <p>
                            <strong>Phone:</strong> {editMode ? (
                                <input
                                    type="text"
                                    className="profileInput"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                            ) : (
                                <span>{phone}</span>
                            )}
                        </p>

                        <p>
                            <strong>Address:</strong> {editMode ? (
                                <select
                                    className="profileInput"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                >
                                    <option value=""></option>
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
                            ) : (
                                <span>{address}</span>
                            )}
                        </p>

                        <div className="actions">
                            {editMode ? (
                                <>
                                    <button onClick={handleSave} className="edit-btn">Save</button>
                                    <button onClick={handleCancel} className="edit-btn">Cancel</button>
                                </>
                            ) : (
                                <button onClick={handleEditToggle} className="edit-btn">Edit</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewProfileAdmin;
