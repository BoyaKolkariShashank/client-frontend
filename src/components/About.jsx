import React from 'react';
import './About.css';
import config from '../config';

function About() {
  return (
    <div className="about-page">
      <h1 className="text-center my-4">About Complaint Management System</h1>
      <hr />
      <p>
        Welcome to our Complaint Management System. We are committed to providing
        a seamless and efficient way for users to submit and track their complaints.
        Our system is designed to ensure that all complaints are handled in a
        timely and effective manner.
      </p>
      <p>
        Our team of dedicated professionals works tirelessly to investigate and
        resolve each complaint. We believe that every complaint is an opportunity
        to improve our services and provide a better experience for our users.
      </p>
      <p>
        Thank you for choosing our Complaint Management System. We appreciate your
        feedback and look forward to serving you.
      </p>
    </div>
  );
}

export default About;