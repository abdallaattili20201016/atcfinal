import React, { useState } from 'react';
import TrainerNavbar from '../../components/TrainerNavbar';
import '../../styles/Styles.css'; // Assuming these styles are defined

const TrainerReportsPage = () => {
  const [reportType, setReportType] = useState('');
  const [filters, setFilters] = useState({ startDate: '', endDate: '', course: '' });
  const [tableData, setTableData] = useState([]);
  const [isTableGenerated, setIsTableGenerated] = useState(false);

  // Mock data for table (replace with API call later)
  const mockTraineeDetails = [

    {
       name: 'John Doe',
       email: 'john@example.com',
        attendance: '95%', 
        grade: 'A' 
    },

    { 
      name: 'Jane Smith',
       email: 'jane@example.com', 
       attendance: '87%',
        grade: 'B' 
    },
    
  ];

  const mockCourseDetails = [
    { 
      name: 'React Basics', 
      trainees: 20, 
      avgGrade: 'B+',
       time: '10:00 AM - 12:00 PM', 
       location: 'Online' 
    },

    { 
      name: 'Advanced JavaScript', 
      trainees: 15,
       avgGrade: 'A',
        time: '2:00 PM - 4:00 PM',
         location: 'Room 302' 
    },
  ];

  // Handle Report Type Selection
  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
    setIsTableGenerated(false);
  };

  // Generate Table Based on Report Type
  const handleGenerateReport = () => {
    if (reportType === 'Trainee Details') {
      setTableData(mockTraineeDetails);
    } else if (reportType === 'Course Details') {
      setTableData(mockCourseDetails);
    }
    setIsTableGenerated(true);
  };

  // Handle Print
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <TrainerNavbar />
      <div className="ViewPage">
        <h1>Trainer Reports</h1>

        {/* Filters Section */}
        <div className="filters-section">
          <select
            className="input-field"
            value={reportType}
            onChange={handleReportTypeChange}
          >
            <option value="">Select Report Type</option>
            <option value="Trainee Details">Trainee Details</option>
            <option value="Course Details">Course Details</option>
          </select>

          <input
            type="date"
            className="date"
            placeholder="Start Date"
            value={filters.startDate}
            onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
          />
          <input
            type="date"
            className="date"
            placeholder="End Date"
            value={filters.endDate}
            onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
          />
          <input
            type="text"
            className="form-field"
            placeholder="Course Name"
            value={filters.course}
            onChange={(e) => setFilters({ ...filters, course: e.target.value })}
          />

          <button className="edit-btn" onClick={handleGenerateReport}>
            Generate Report
          </button>
        </div>

        {/* Table Section */}
        {isTableGenerated && (
          <div className="table-section">
            <button className="edit-btn" onClick={handlePrint}>
              Print Report
            </button>
            <table className="table">
              <thead>
                <tr>
                  {reportType === 'Trainee Details' ? (
                    <>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Attendance</th>
                      <th>Grade</th>
                    </>
                  ) : (
                    <>
                      <th>Course Name</th>
                      <th>Number of Trainees</th>
                      <th>Average Grade</th>
                      <th>Time</th>
                      <th>Location</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    {reportType === 'Trainee Details' ? (
                      <>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.attendance}</td>
                        <td>{item.grade}</td>
                      </>
                    ) : (
                      <>
                        <td>{item.name}</td>
                        <td>{item.trainees}</td>
                        <td>{item.avgGrade}</td>
                        <td>{item.time}</td>
                        <td>{item.location}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default TrainerReportsPage;
