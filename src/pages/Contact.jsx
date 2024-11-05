import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Left side - Contact Details */}
        <div className="contact-details" data-aos="fade-right">
          <h1>Get In Touch</h1>
          <p>
            At <b>Fotia</b>, we're dedicated to providing you with exceptional support. Whether you have questions about our cryptocurrency wallet services or need assistance with your account, we're here to help!
          </p>
          <div className="contact-info">
            <h2>Our Location</h2>
            <p>
              <FaMapMarkerAlt className="icon" /> <strong>Dubai Office</strong><br />
              No 409, Al Khail Heights, Al Quoz,<br />
              Dubai, United Arab Emirates, 00000
            </p>
            <h2>Contact Us</h2>
            <p><FaEnvelope className="icon" /> <strong>Email :</strong>support@fotia.ai</p>
            <p><FaClock className="icon" /> <strong>Working Hours :</strong> 09:00 - 17:00 (UTC)</p>

          </div>
        </div>

        {/* Right side - Google Map */}
        <div className="contact-map" data-aos="fade-left">
          <iframe
            className="google-map"
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.999070268623!2d55.22441147407381!3d25.17977588387351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b2f5fdfbb35%3A0xf3fbb6021e9a4e39!2sAl%20Khail%20Heights%20Building%2010%2C%20Dubai!5e0!3m2!1sen!2sae!4v1685793987523!5m2!1sen!2sae"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
