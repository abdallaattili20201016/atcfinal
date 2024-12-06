import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate here
import '../../styles/Styles.css';
import Navbar from '../../components/Navbar';
import '../../styles/PaymentPage.css';

const PaymentPage = () => {
  // Sample data for course and installments
  const courseCost = 300; // Total course cost
  const PaymentPages = [
    { date: '05/09/2024', amount: 50, status: 'Paid' },
    { date: '01/10/2024', amount: 50, status: 'Paid' },
    { date: '05/11/2024', amount: 50, status: 'Paid' },
  ];

  // Calculate the total paid and remaining balance
  const totalPaid = PaymentPages.reduce((sum, PaymentPage) => sum + PaymentPage.amount, 0);
  const remainingBalance = courseCost - totalPaid;

  return (
    <>
      <Navbar />
      <div className="ViewPage">
        <center><h2 className="section-title">Installments</h2></center>
        <table className="installments-table">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {PaymentPages.map((PaymentPage, index) => (
              <tr key={index}>
                <td>{PaymentPage.amount}</td>
                <td>{PaymentPage.date}</td>
                <td className={PaymentPage.status === 'Paid' ? 'status-paid' : 'status-unpaid'}>
                  {PaymentPage.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="payment-summary">
          <p>Total Course Cost: {courseCost}</p>
          <p>Total Paid: {totalPaid}</p>
          <p>Remaining Balance: {remainingBalance}</p>
        </div>
        <button className="payment-button">Payment Methods</button>
      </div>
    </>
  );
};

export default PaymentPage;