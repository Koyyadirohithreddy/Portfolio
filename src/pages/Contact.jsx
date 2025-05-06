import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Click an icon to connect with me:</p>
      <div className="contact-icons">
        <a href="mailto:rkoyyadi@aum.edu" target="_blank" rel="noopener noreferrer">
          <img src="/Portfolio/email.png" alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/koyyadi-rohithreddy-74a27834b/" target="_blank" rel="noopener noreferrer">
          <img src="/Portfolio/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Koyyadirohithreddy" target="_blank" rel="noopener noreferrer">
          <img src="/Portfolio/github.png" alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
