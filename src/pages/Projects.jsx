import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Dynamic Project Gallery",
    description: "A project that shows all of my tasks.",
    link: "https://github.com/Koyyadirohithreddy/project1.git"
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
