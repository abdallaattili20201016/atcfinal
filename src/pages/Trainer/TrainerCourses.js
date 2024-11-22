import React, { useState } from 'react';
import TrainerNavbar from '../../components/TrainerNavbar';
import '../../styles/Styles.css';

const CoursesPage = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'React Basics', trainees: 20, status: 'Active' },
    { id: 2, name: 'Advanced JavaScript', trainees: 15, status: 'Active' },
    { id: 3, name: 'Database Management', trainees: 10, status: 'Inactive' },
  ]);

  return (
    <>
      <TrainerNavbar />
      <div className="ViewPage">
        <h1>Courses</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Trainees</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.trainees}</td>
                <td>{course.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CoursesPage;
