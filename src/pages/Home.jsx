import { FaDev, FaLinkedin, FaGithub } from 'react-icons/fa';

function Home() {
  return (
    <div className="home">
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
      </div>
      <div className="content">
        <h2>Hi there! I'm</h2>
        <h1>Koyyadi Rohith Reddy</h1>
        <h3>I'm a Software Engineer</h3>
        <p>I have experience in JavaScript, React, C++, Java, Python, and more.</p>
        <p>This website was created using React.js and custom CSS.</p>
        <button className="cta-button">Get in touch</button>
      </div>
    </div>
  );
}

export default Home;