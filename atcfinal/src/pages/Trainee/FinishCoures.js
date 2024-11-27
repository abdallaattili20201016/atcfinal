import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import '../../styles/FinishCoures.css';

const FinishCoures = () => {
    const navigate = useNavigate();

    // State to handle modal visibility
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    const finishedCourses = [
        { id: 1, title: 'C++', status: 'Completed', buttonLabel: 'Finish course', buttonColor: 'gray' },
        { id: 2, title: 'Modern web applications', status: 'Completed', buttonLabel: 'Finish course', buttonColor: 'gray' },
        { id: 3, title: 'Information security', status: 'Completed', buttonLabel: 'Finish course', buttonColor: 'gray' },
    ];

    const courseDetails = {
        trainer: 'Ammar Ouda',
        divisionNumber: '1516',
        hallLocation: 'Floor 3',
        lectureTime: '07:00 PM - 09:00 PM',
        courseDate: '08/09/2024 - 01/12/2024',
        attendanceRate: '(86%) 12/14',
        examMark: '78',
        examResult: 'Pass',
    };

    const handleBack = () => {
        if (navigate) {
            navigate('/dashboard'); // Use useNavigate
        } else {
            window.location.href = '/dashboard'; // Fallback
        }
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
                <h2>Finish Courses</h2>
                <div className="courses-grid">
                    {finishedCourses.map((course) => (
                        <div className="dashboard-card" key={course.id}>
                            <h3>{course.title}</h3>
                            <p>{course.status === 'Completed' ? 'It has been studied' : ''}</p>
                            <button className={`course-button ${course.buttonColor}`} onClick={openModal}>
                                {course.buttonLabel || 'Finish course'}
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

export default FinishCoures;
