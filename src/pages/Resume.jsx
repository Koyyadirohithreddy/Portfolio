import React from 'react';
import './Resume.css'; // Styling for resume page

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-heading">Resume</h1>
      
      <a
        className="download-link"
        href="/Koyyadi_Rohith_Reddy_Software_Developer_Resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        Download PDF Version
      </a>

      <div className="resume-grid">
        {/* Education */}
        <div className="resume-box">
          <h2>Education</h2>
          <p><strong>Master of Science in Computer Science</strong><br />
            Auburn University at Montgomery, AL<br />
            Expected Graduation: 2025
          </p>
          <br />
          <p><strong>Bachelor of Technology in Computer Science</strong><br />
            Keshav Memorial Institute of Technology<br />
            2018 – 2022
          </p>
        </div>

        {/* Work Experience */}
        <div className="resume-box">
          <h2>Work Experience</h2>
          <p><strong>Python Full Stack Intern</strong><br />
            Zensar Technologies, Hyderabad<br />
            May 2023 – October 2023
          </p>
        </div>

        {/* Volunteer Experience */}
        <div className="resume-box">
          <h2>Volunteer Experience</h2>
          <p><strong>Internshala Student Partner</strong><br />
            Promoted Internshala, increased awareness and registrations
          </p>
        </div>

        {/* Skills */}
        <div className="resume-box">
          <h2>Skills</h2>
          <div className="skills-columns">
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
