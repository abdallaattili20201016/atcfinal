// src/pages/Admin/Reports.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar';
import '../../styles/Styles.css';

const Reports = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate('/dashboard'); // Navigate back to the dashboard

  const handlePrintCategory = (categoryId, reportName) => {
    const categoryContent = document.getElementById(categoryId).innerHTML;
    const adminName = "Admin Name"; // Replace with dynamic admin name if available
    const today = new Date().toLocaleDateString();

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>${reportName} Report</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { border-collapse: collapse; width: 100%; margin-top: 20px; }
            th, td { border: 1px solid black; padding: 10px; text-align: left; }
            th { background-color: #f4f4f4; }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .header h1, .header h3, .header h4 {
              margin: 5px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Academic Training Center</h1>
            <h3>Admin Name: ${adminName}</h3>
            <h4>Date: ${today}</h4>
            <h4>Report: ${reportName}</h4>
          </div>
          <table>${categoryContent}</table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const data = [
    {
      category: "Financial",
      details: [
        { metric: "Total Revenue", value: "$12,345" },
        { metric: "Monthly Revenue", value: "January: $2,345, February: $3,123, March: $4,567" },
      ],
    },
    {
      category: "Trainees",
      details: [
        { metric: "Total Trainees", value: "120" },
        { metric: "Majors", value: "Computer Science: 40, Business: 30, Engineering: 50" },
      ],
    },
    {
      category: "Trainers",
      details: [
        { metric: "Total Trainers", value: "15" },
        { metric: "Courses Taught", value: "React Basics: Trainer A, Advanced JavaScript: Trainer B, Database Management: Trainer C" },
      ],
    },
  ];

  return (
    <>
      <AdminNavbar />
      <div className="ViewPage">
        <h1>Reports</h1>
        <table className="reports-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Metric</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((section, sectionIndex) => (
              <>
                <tr key={`category-${sectionIndex}`}>
                  <td rowSpan={section.details.length+1}>
                    {/* +1 */}
                    <strong>{section.category}</strong>
                  </td>
                  {/* <td colSpan="2" class="hiddenRow"></td> */}
                  
                </tr>
                {section.details.map((detail, detailIndex) => (
                  <tr key={`${sectionIndex}-${detailIndex}`} id={`category-${sectionIndex}-rows`}>
                    <td >{detail.metric}</td>
                    <td>{detail.value}</td>
                    <td >
                    <button
                      onClick={() => handlePrintCategory(`category-${sectionIndex}-rows`, section.category)}
                      className="print-button"
                    >
                      Print
                    </button>
                  </td>
                  
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Reports;
