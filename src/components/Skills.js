// Skills.js
import React from 'react';
import './Skills.css'; // Import the CSS file for styling

const Skills = () => {
  const leftSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'PYTHON'];
  const rightSkills = ['Node.js', 'Express', 'MongoDB', 'JAVA', 'DBMS'];

  return (
    <div className="skills-container">
      <div className="left-skills">
        <h2>Skills</h2>
        <ul>
          {leftSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="right-skills">
        <ul>
          {rightSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
