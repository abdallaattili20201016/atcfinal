import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Styles.css";
import Navbar from "../../components/Navbar";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openSections, setOpenSections] = useState({}); // Track which sections are open

  useEffect(() => {
    // Mock course details
    const mockCourseDetails = {
      1: {
        name: "Principles of Probability",
        time: "Monday & Wednesday, 10:00 AM - 11:30 AM",
        trainer: "Dr. John Smith",
        location: "Room 101, Main Building",
        content: {
          Quizzes: ["Quiz 1", "Quiz 2", "Final Quiz"],
          Slides: ["Lecture 1 Slides", "Lecture 2 Slides"],
          Notes: ["Chapter 1 Notes", "Chapter 2 Notes"],
        },
      },
      2: {
        name: "Data Structures",
        time: "Tuesday & Thursday, 1:00 PM - 2:30 PM",
        trainer: "Dr. Jane Doe",
        location: "Room 202, Science Hall",
        content: {
          Quizzes: ["Quiz 1", "Quiz 2"],
          Slides: ["Week 1 Slides", "Week 2 Slides"],
          Notes: ["Week 1 Notes"],
        },
      },
      3: {
        name: "Introduction to Machine Learning",
        time: "Friday, 3:00 PM - 5:00 PM",
        trainer: "Dr. Emily Brown",
        location: "Lab 303, Tech Center",
        content: {
          Quizzes: ["Quiz 1"],
          Slides: ["Module 1 Slides", "Module 2 Slides"],
          Notes: ["Introductory Notes"],
        },
      },
    };

    // Simulate API call
    setTimeout(() => {
      if (mockCourseDetails[courseId]) {
        setCourse(mockCourseDetails[courseId]);
      } else {
        setError("Course not found");
      }
      setLoading(false);
    }, 1000); // Simulated delay
  }, [courseId]);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (loading) return <p>Loading course details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!course) return <p>Course not found.</p>;

  return (
    <>
      <Navbar />
      <div className="ViewPage">
        <h1>{course.name}</h1>
        <div className="info-section">
          <div className="info-box">
            <p>
              <strong>Time:</strong> {course.time}
            </p>
            <p>
              <strong>Trainer:</strong> {course.trainer}
            </p>
            <p>
              <strong>Location:</strong> {course.location}
            </p>
          </div>
        </div>

        <div className="content-section">
          <h2>Course Content</h2>
          {Object.keys(course.content).map((section) => (
            <div key={section} className="content-slider">
              <div
                className="slider-header"
                onClick={() => toggleSection(section)}
              >
                <h3>{section}</h3>
                <span>
                  {openSections[section] ? "▼" : "▶"}
                </span>
              </div>
              {openSections[section] && (
                <div className="slider-content">
                  <ul>
                    {course.content[section].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseDetails;






// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../../styles/Styles.css";
// import Navbar from '../../components/Navbar';

// const CourseDetails = () => {
//   const { courseId } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch course details
//     const fetchCourseDetails = async () => {
//       try {
//         const response = await fetch(`/api/courses/${courseId}`); // Replace with actual API URL
//         if (!response.ok) throw new Error("Failed to fetch course details");
//         const data = await response.json();
//         setCourse(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseDetails();
//   }, [courseId]);

//   if (loading) return <p>Loading course details...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!course) return <p>Course not found.</p>;

//   return (
//     <>
//     <Navbar />
//     <div className="ViewPage">
//       <h1>{course.name}</h1>
//       <div className="info-section">
//         <div className="info-box">
//           <p>
//             <strong>Time:</strong> {course.time}
//           </p>
//           <p>
//             <strong>Trainer:</strong> {course.trainer}
//           </p>
//           <p>
//             <strong>Location:</strong> {course.location}
//           </p>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default CourseDetails;
