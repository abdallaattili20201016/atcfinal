import React, { useState, useRef } from 'react';
import '../../styles/Styles.css';
import Navbar from '../../components/Navbar';

const Courses = () => {
  const enrolledRowRef = useRef(null);
  const availableRowRef = useRef(null);

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const enrolledCourses = [
    { id: 1, title: 'React Basics', description: 'Learn the basics of React.' },
    { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JS concepts.' },
    { id: 3, title: 'CSS Mastery', description: 'Become a CSS expert.' },
  ];

  const availableCourses = [
    { id: 4, title: 'Node.js Fundamentals', description: 'Introduction to Node.js.' },
    { id: 5, title: 'Database Management', description: 'Learn SQL and NoSQL.' },
    { id: 6, title: 'UI/UX Design', description: 'Design engaging interfaces.' },
    { id: 7, title: 'Project Management', description: 'Learn project management basics.' },
  ];

  const courseDetails = {
    trainer: 'Ammar Ouda',
    divisionNumber: '1516',
    hallLocation: 'Floor 3',
    lectureTime: '07:00 PM - 09:00 PM',
    courseDate: '08/09/2024 - 01/12/2024',
    attendanceRate: '(86%) 12/14',
    examMark: '90/100',
    examResult: 'Passed',
  };

  const openModal = (course) => {
    setSelectedCourse(course);
    setShowDetailsModal(true);
  };

  const closeModal = () => {
    setShowDetailsModal(false);
    setSelectedCourse(null);
  };

  const handleScroll = (rowRef) => {
    rowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="ViewPage">
        {/* Enrolled Courses */}
        <h2 className="section-heading">Enrolled Courses</h2>
        <div className="courses-row-wrapper">
          <div className="courses-row" ref={enrolledRowRef}>
            {enrolledCourses.map((course) => (
              <div className="course-card" key={course.id}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button
                  className="course-button gray"
                  onClick={() => openModal(course)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
          <button
            className="scroll-arrow"
            onClick={() => handleScroll(enrolledRowRef)}
          >
            ►
          </button>
        </div>

        {/* Available Courses */}
        <h2 className="section-heading">Available Courses</h2>
        <div className="courses-row-wrapper">
          <div className="courses-row" ref={availableRowRef}>
            {availableCourses.map((course) => (
              <div className="course-card" key={course.id}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button
                  className="course-button blue"
                  onClick={() => openModal(course)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
          <button
            className="scroll-arrow"
            onClick={() => handleScroll(availableRowRef)}
          >
            ►
          </button>
        </div>
      </div>

      {/* Modal */}
      {showDetailsModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Course Details</h2>
            <div className="course-details">
              <div className="detail-row">
                <span>Title:</span>
                <span>{selectedCourse?.title}</span>
              </div>
              <div className="detail-row">
                <span>Trainer:</span>
                <span>{courseDetails.trainer}</span>
              </div>
              <div className="detail-row">
                <span>Division Number:</span>
                <span>{courseDetails.divisionNumber}</span>
              </div>
              <div className="detail-row">
                <span>Hall Location:</span>
                <span>{courseDetails.hallLocation}</span>
              </div>
              <div className="detail-row">
                <span>Lecture Time:</span>
                <span>{courseDetails.lectureTime}</span>
              </div>
              <div className="detail-row">
                <span>Course Date:</span>
                <span>{courseDetails.courseDate}</span>
              </div>
              <div className="detail-row">
                <span>Attendance Rate:</span>
                <span>{courseDetails.attendanceRate}</span>
              </div>
              <div className="detail-row">
                <span>Exam Mark:</span>
                <span>{courseDetails.examMark}</span>
              </div>
              <div className="detail-row">
                <span>Exam Result:</span>
                <span>{courseDetails.examResult}</span>
              </div>
            </div>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
