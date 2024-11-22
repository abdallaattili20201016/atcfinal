import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/Certificates.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../styles/Styles.css';

const Certificates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const courses = [
    { name: 'Course 1', status: 'Approved', progress: '100%', comments: 'No comments' },
    { name: 'Course 2', status: 'Pending', progress: '50%', comments: 'Pending approval' },
    { name: 'Course 3', status: 'Pending', progress: '30%', comments: 'Requires revision' },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || course.status === filter;
    return matchesSearch && matchesFilter;
  });

  const handlePrintRequest = (courseName) => {
    alert(`Print request for ${courseName}`);
  };

  return (
    <>
      <Navbar />
      <div className="ViewPage">
        <h1 className="page-title">Certificates</h1>
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="All">All</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <table className="certificates-table reports-style">
          <thead>
            <tr>
              <th>Course</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Comments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td className={course.status === 'Approved' ? 'approved' : 'pending'}>
                  {course.status}
                </td>
                <td>{course.progress}</td>
                <td>{course.comments}</td>
                <td>
                  <button
                    className="print-request-btn"
                    onClick={() => handlePrintRequest(course.name)}
                  >
                    Print
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="whatsapp-contact">
          <p>Need help? Contact us on WhatsApp:</p>
          <a href="https://wa.me/+962788649217" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp whatsapp-icon"></i>
            +962788649217
          </a>
        </div>
      </div>
    </>
  );
};

export default Certificates;
