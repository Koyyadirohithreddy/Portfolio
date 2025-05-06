// src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">Koyyadi Rohith Reddy</div>

      <nav>
        <ul>
          <li><Link to="/">01. Home</Link></li>
          <li><Link to="/projects">02. Projects</Link></li>
          <li><Link to="/resume">03. Resume</Link></li>
          <li><Link to="/about">04. About</Link></li>
          <li><Link to="/contact">05. Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;