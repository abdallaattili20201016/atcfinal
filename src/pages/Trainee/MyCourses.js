import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Styles.css";
import Navbar from '../../components/Navbar';

const MyCourses = () => {
    const [courses, setCourses] = useState([]); // To hold course data
    const [loading, setLoading] = useState(true); // To show loading state
    const [error, setError] = useState(null); // To display errors if any
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                // Fetch courses from the backend
                const response = await fetch('http://localhost:5000/api/My-Courses', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Add auth token
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }

                const data = await response.json();
                setCourses(data);
            }
             catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const handleCourseClick = (courseId) => {
        navigate(`/CourseDetails/${courseId}`); // Navigate to CourseDetails page
    };

    if (loading) return <p>Loading courses...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Navbar />
            <div className="ViewPage">
                <h1>My Courses</h1>
                <div className="dashboard-container">
                    {courses.map((course) => (
                        <div
                            key={course._id} // Use the course's ID
                            className="dashboard-card"
                            onClick={() => handleCourseClick(course._id)} // Pass ID on click
                        >
                            <h3>{course.name}</h3> {/* Display course name */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyCourses;














// use this when backend is ready
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../styles/Styles.css";
// import Navbar from '../../components/Navbar';

// const MyCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch enrolled courses
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch("/api/trainee/courses"); // Replace with actual API URL
//         if (!response.ok) throw new Error("Failed to fetch courses");
//         const data = await response.json();
//         setCourses(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleCourseClick = (courseId) => {
//     navigate(`/trainee/course-details/${courseId}`);
//   };

//   if (loading) return <p>Loading courses...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//     <Navbar />
//     <div className="ViewPage">
//       <h1>My Courses</h1>
//       <div className="dashboard-container">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="dashboard-card"
//             onClick={() => handleCourseClick(course.id)}
//           >
//             <h3>{course.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default MyCourses;



// ebro
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../styles/Styles.css";
// import Navbar from '../../components/Navbar';

// const MyCourses = () => {
//     const [courses, setCourses] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     function getMyCourses() {
//         fetch('https://fakestoreapi.com/products')

//             .then(response => response.json())
//             .then(result => {
//                 setCourses(result);
//                 setLoading(false);
//                 console.log('result', result)
//             })
//             .catch(error => console.log('error', error));
//     }

//     useEffect(() => {
//         // Mock API response
//         setLoading(true)
//         getMyCourses()
//         // const mockCourses = [
//         //     { id: 1, name: "Principles of Probability" },
//         //     { id: 2, name: "Data Structures" },
//         //     { id: 3, name: "Introduction to Machine Learning" },
//         // ];

//         // // Simulate API call
//         // setTimeout(() => {
//         //     setCourses(mockCourses);
//         //     setLoading(false);
//         // }, 1000); // Simulated delay
//     }, []);

//     const handleCourseClick = (courseId) => {
//         navigate(`/CourseDetails/${courseId}`);

//     };

//     if (loading) return <p>Loading courses...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <>
//             <Navbar />
//             <div className="ViewPage">
//                 <h1>My Courses</h1>
//                 <div className="dashboard-container">
//                     {courses.map((course) => (
//                         <div
//                             key={course.id}
//                             className="dashboard-card"
//                             onClick={() => handleCourseClick(course.id)}
//                         >
//                             <h3>{course.title}</h3>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MyCourses;

