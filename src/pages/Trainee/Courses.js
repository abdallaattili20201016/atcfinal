import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Styles.css';
import Navbar from '../../components/Navbar';
import '../../styles/Lectures.css';


const Courses = () => {
    const navigate = useNavigate();
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    const enrolledCourses = [
        { id: 1, title: 'React Basics', description: 'Learn the basics of React.' },
        { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JS concepts.' },
    ];

    const availableCourses = [
        { id: 3, title: 'Node.js Fundamentals', description: 'Introduction to Node.js.' },
        { id: 4, title: 'Database Management', description: 'Learn SQL and NoSQL.' },
        { id: 5, title: 'UI/UX Design', description: 'Design engaging interfaces.' },
        { id: 6, title: 'Project Management', description: 'Learn project management basics.' },
    ];

    const courseDetails = {
        trainer: 'Ammar Ouda',
        divisionNumber: '1516',
        hallLocation: 'Floor 3',
        lectureTime: '07:00 PM - 09:00 PM',
        courseDate: '08/09/2024 - 01/12/2024',
        attendanceRate: '(86%) 12/14',
        examMark: '',
        examResult: '',
    };

    const openModal = () => {
        setShowDetailsModal(true);
    };

    const closeModal = () => {
        setShowDetailsModal(false);
    };

    return (
        <>
            <Navbar />
            <div className="ViewPage">
                <h2>Current Courses</h2>
                <div className="courses-grid">
                    {enrolledCourses.map((course) => (
                        <div className="dashboard-card" key={course.id}>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <button className="course-button gray" onClick={openModal}>
                                View Details
                            </button>
                        </div>
                    ))}
                </div>

                <h2>Available Courses</h2>
                <div className="courses-grid">
                    {availableCourses.map((course) => (
                        <div className="dashboard-card" key={course.id}>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <button className="course-button blue" onClick={openModal}>
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {showDetailsModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Course Details</h2>
                        <div className="course-details">
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
                        <button className="close-buttom" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Courses;
