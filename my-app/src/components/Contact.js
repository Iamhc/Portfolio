import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <img
          src="/images/email-icon.png"
          alt="Email icon"
          className="contact-icon"
        />
        <p>Email: example@gmail.com</p>
      </div>

      <div className="contact-card">
        <img
          src="/images/phone-icon.png"
          alt="Phone icon"
          className="contact-icon"
        />
        <p>Phone: +91 9876543210</p>
      </div>

      <div className="contact-card">
        <img
          src="/images/location-icon.png"
          alt="Location icon"
          className="contact-icon"
        />
        <p>Location: New Delhi, India</p>
      </div>
    </div>
  );
};

export default Contact;
