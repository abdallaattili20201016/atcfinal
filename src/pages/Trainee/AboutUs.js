import React from 'react';
import '../../styles/Styles.css';
import Navbar from '../../components/Navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="ViewPage">
        {/* Heading Section */}
          <center><h1 class="pageTitle">About Us</h1></center>
        

        {/* Overview Section */}
        <section className="about-us-overview information" >
          <h2>Who We Are</h2>
          <p>
            At Academic Training Center, we are committed to providing quality training programs designed to empower
            learners with the skills they need to excel in their academic and professional journeys. Our mission is to
            nurture talent and foster lifelong learning.
          </p>
        </section>

        {/* Programs Offered */}
        <section className="about-us-programs information">
          <h2>Our Programs</h2>
          <ul>
            <li>Professional Certification Courses</li>
            <li>Soft Skills Development</li>
            <li>Academic Support and Tutoring</li>
            <li>Workshops and Seminars</li>
          </ul>
        </section>

        {/* Achievements Section */}
        <section className="about-us-achievements information">
          <h2>Our Achievements</h2>
          <div className="info-section">
            <div className="achievement">
              <h3>500+</h3>
              <p>Students Trained</p>
            </div>
            <div className="achievement">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="achievement">
              <h3>Award</h3>
              <p>Best Training Center 2023</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-us-cta information">
          <h2>Join Us Today</h2>
          <p>
            Take the next step in your learning journey. Explore our courses and become a part of our growing community
            of learners.
          </p>
          <button className="edit-btn">Explore Courses</button>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
