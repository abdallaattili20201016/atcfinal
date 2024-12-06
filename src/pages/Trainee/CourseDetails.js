import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Styles.css";
import Navbar from "../../components/Navbar";

const CourseDetails = () => {
  const { courseId } = useParams(); // Get course ID from the URL
  const [course, setCourse] = useState(null); // Course details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [openSections, setOpenSections] = useState({}); // Track which sections are open

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try 
      {
        // Fetch course details from the backend
        const response = await fetch(`http://localhost:5000/api/My-Courses/${courseId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Add auth token
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch course details');
        }

        const data = await response.json();
        setCourse(data);
      } 

      catch (error) 
      
      {
        setError(error.message);
      } 

      finally 
      {
        setLoading(false);
      }
    };

    fetchCourseDetails();
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
              <strong>Trainer:</strong> {course.trainer.name} {/* Assuming trainer is an object */}
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
                <span>{openSections[section] ? "▼" : "▶"}</span>
              </div>
              {openSections[section] && (
                <div className="slider-content">
                  <ul>
                    {course.content[section].map((item, index) => {
                      if (typeof item === "string") {
                        return <li key={index}>{item}</li>;
                      } else {
                        return (
                          <li key={index}>
                            <a href={item.url} download target="_blank" rel="noopener noreferrer">
                              {item.name}
                            </a>
                          </li>
                        );
                      }
                    })}
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
// import Navbar from "../../components/Navbar";

// const CourseDetails = () => {
//   const { courseId } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [openSections, setOpenSections] = useState({}); // Track which sections are open

//   useEffect(() => {
//     // Mock course details with downloadable files
//     const mockCourseDetails = {
//       1: {
//         name: "Principles of Probability",
//         time: "Monday & Wednesday, 10:00 AM - 11:30 AM",
//         trainer: "Dr. John Smith",
//         location: "Room 101, Main Building",
//         content: {
//           Quizzes: ["Quiz 1", "Quiz 2", "Final Quiz"],
//           Slides: [
//             { name: "Lecture 1 Slides", url: "/mock-files/lecture1.pdf" },
//             { name: "Lecture 2 Slides", url: "/mock-files/lecture2.pdf" },
//           ],
//           Notes: [
//             { name: "Chapter 1 Notes", url: "/mock-files/chapter1.docx" },
//             { name: "Chapter 2 Notes", url: "/mock-files/chapter2.docx" },
//           ],
//         },
//       },
//       2: {
//         name: "Data Structures",
//         time: "Tuesday & Thursday, 1:00 PM - 2:30 PM",
//         trainer: "Dr. Jane Doe",
//         location: "Room 202, Science Hall",
//         content: {
//           Quizzes: ["Quiz 1", "Quiz 2"],
//           Slides: [
//             { name: "Week 1 Slides", url: "/mock-files/week1.pdf" },
//             { name: "Week 2 Slides", url: "/mock-files/week2.pdf" },
//           ],
//           Notes: [
//             { name: "Week 1 Notes", url: "/mock-files/week1.docx" },
//           ],
//         },
//       },
//     };

//     // Simulate API call
//     setTimeout(() => {
//       if (mockCourseDetails[courseId]) {
//         setCourse(mockCourseDetails[courseId]);
//       } else {
//         setError("Course not found");
//       }
//       setLoading(false);
//     }, 1000); // Simulated delay
//   }, [courseId]);

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   if (loading) return <p>Loading course details...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!course) return <p>Course not found.</p>;

//   return (
//     <>
//       <Navbar />
//       <div className="ViewPage">
//         <h1>{course.name}</h1>
//         <div className="info-section">
//           <div className="info-box">
//             <p>
//               <strong>Time:</strong> {course.time}
//             </p>
//             <p>
//               <strong>Trainer:</strong> {course.trainer}
//             </p>
//             <p>
//               <strong>Location:</strong> {course.location}
//             </p>
//           </div>
//         </div>

//         <div className="content-section">
//           <h2>Course Content</h2>
//           {Object.keys(course.content).map((section) => (
//             <div key={section} className="content-slider">
//               <div
//                 className="slider-header"
//                 onClick={() => toggleSection(section)}
//               >
//                 <h3>{section}</h3>
//                 <span>{openSections[section] ? "▼" : "▶"}</span>
//               </div>
//               {openSections[section] && (
//                 <div className="slider-content">
//                   <ul>
//                     {course.content[section].map((item, index) => {
//                       if (typeof item === "string") {
//                         // Non-downloadable items (e.g., quizzes)
//                         return <li key={index}>{item}</li>;
//                       } else {
//                         // Downloadable items
//                         return (
//                           <li key={index}>
//                             <a href={item.url} download target="_blank" rel="noopener noreferrer">
//                               {item.name}
//                             </a>
//                           </li>
//                         );
//                       }
//                     })}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CourseDetails;





//import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../../styles/Styles.css";
// import Navbar from "../../components/Navbar";

// const CourseDetails = () => {
//   const { courseId } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [openSections, setOpenSections] = useState({}); // Track which sections are open

//   useEffect(() => {
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

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   if (loading) return <p>Loading course details...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!course) return <p>Course not found.</p>;

//   return (
//     <>
//       <Navbar />
//       <div className="ViewPage">
//         <h1>{course.name}</h1>
//         <div className="info-section">
//           <div className="info-box">
//             <p>
//               <strong>Time:</strong> {course.time}
//             </p>
//             <p>
//               <strong>Trainer:</strong> {course.trainer}
//             </p>
//             <p>
//               <strong>Location:</strong> {course.location}
//             </p>
//           </div>
//         </div>

//         <div className="content-section">
//           <h2>Course Content</h2>
//           {Object.keys(course.content).map((section) => (
//             <div key={section} className="content-slider">
//               <div
//                 className="slider-header"
//                 onClick={() => toggleSection(section)}
//               >
//                 <h3>{section}</h3>
//                 <span>{openSections[section] ? "▼" : "▶"}</span>
//               </div>
//               {openSections[section] && (
//                 <div className="slider-content">
//                   <ul>
//                     {course.content[section].map((item, index) => {
//                       if (typeof item === "string") {
//                         // Non-downloadable items (e.g., quizzes)
//                         return <li key={index}>{item}</li>;
//                       } else {
//                         // Downloadable items
//                         return (
//                           <li key={index}>
//                             <a href={item.url} download target="_blank" rel="noopener noreferrer">
//                               {item.name}
//                             </a>
//                           </li>
//                         );
//                       }
//                     })}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CourseDetails;
