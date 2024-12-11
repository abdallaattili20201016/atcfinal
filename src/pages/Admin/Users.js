// src/pages/Admin/UsersPage.js
import React, { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import "../../styles/Styles.css";

const UsersPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Trainer",
      email: "john@example.com",
      phone: "123-456-7890",
      date: "2024-11-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Trainee",
      email: "jane@example.com",
      phone: "987-654-3210",
      date: "2024-11-14",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Trainer",
      email: "alice@example.com",
      phone: "567-890-1234",
      date: "2024-11-13",
    },
    {
      id: 4,
      name: "Bob Brown",
      role: "Trainee",
      email: "bob@example.com",
      phone: "234-567-8901",
      date: "2024-11-12",
    },
  ]);

  const [roleFilter, setRoleFilter] = useState("All");
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // State to show/hide overlay
  const [newUser, setNewUser] = useState({
    name: "",
    role: "Trainer",
    email: "",
    phone: "",
  });

  // Filter users based on role
  const filteredUsers =
    roleFilter === "All"
      ? users
      : users.filter((user) => user.role === roleFilter);

  // Handle input change for the new user
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Handle adding a new user
  const handleAddUser = () => {
    if (newUser.name && newUser.role && newUser.email && newUser.phone) {
      setUsers([
        ...users,
        {
          ...newUser,
          id: Date.now(),
          date: new Date().toISOString().split("T")[0],
        },
      ]);
      setIsOverlayVisible(false); // Hide the overlay after adding
      setNewUser({ name: "", role: "Trainer", email: "", phone: "" });
    } else {
      alert("Please fill out all fields correctly!");
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="ViewPage">
        <center>
          <h1 class="pageTitle">Users</h1>
        </center>
        <table className="usersTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.date}</td>
                <td>
                  <button className="tbl-action-btn">Edit</button>
                  <button className="tbl-action-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Full-Page Overlay */}
        {isOverlayVisible && (
          <div className="overlay">
            <div className="overlay-content">
              <button
                className="close-button"
                onClick={() => setIsOverlayVisible(false)}
              >
                ✖
              </button>
              <h2>Add New User</h2>
              <form>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Role:
                  <select
                    name="role"
                    value={newUser.role}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Trainer">Trainer</option>
                    <option value="Trainee">Trainee</option>
                  </select>
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Phone:
                  <input
                    type="tel"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </form>
              <div className="form-actions">
                <button className="primary-button" onClick={handleAddUser}>
                  Save
                </button>
                <button
                  className="secondary-button"
                  onClick={() => setIsOverlayVisible(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="viewUsers">
          <div className="info-box">
            <button className="edit-btn" onClick={() => setRoleFilter("All")}>
              View All Users
            </button>
            <button
              className="edit-btn"
              onClick={() => setRoleFilter("Trainer")}
            >
              View All Trainers
            </button>
            <button
              className="edit-btn"
              onClick={() => setRoleFilter("Trainee")}
            >
              View All Trainees
            </button>
            <button
              className="edit-btn"
              onClick={() => setIsOverlayVisible(true)}
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
