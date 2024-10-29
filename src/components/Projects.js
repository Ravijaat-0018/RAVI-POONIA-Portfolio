// Projects.js
import React from 'react';
import './Projects.css'; // Import the CSS file for styling

const Projects = () => {
  const projects = [
    { title: 'E-commerce', description: 'By using of web development make a ecommerce project by the help of html and css.' },
    { title: 'ATM interface', description: 'In this project we are make a atm interface such as saving, balance, withdraw etc option used'},
    { title: 'Smart kitchen', description: 'arduino nano chip are used for saftey and written a program for chip.' },
    { title: 'Home Price', description: 'By the help of Machine Learning give a data set and train and pridict price for different places.' },
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
