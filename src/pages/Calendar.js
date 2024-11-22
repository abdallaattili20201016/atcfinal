import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Include default styling
import Navbar from '../components/Navbar';

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <>
            <Navbar />
            <div className="ViewPage">
                <Calendar onChange={onChange} value={date} />
                <p>Selected Date: {date.toDateString()}</p>
            </div>
        </>
    );
};

export default MyCalendar;
