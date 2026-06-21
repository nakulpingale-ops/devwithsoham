import React from 'react';
import styles from './Marquee.module.css';

const skills = [
  ".NET", "ASP.NET", "REST APIs", "PostgreSQL", "Redis", "RabbitMQ", "AWS", "Gemini", "Claude", "AI Development"
];

// Duplicate the array to create an infinite loop effect
const doubledSkills = [...skills, ...skills, ...skills, ...skills];

const Marquee = () => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {doubledSkills.map((skill, index) => (
          <React.Fragment key={index}>
            <span className={styles.skill}>{skill}</span>
            <span className={styles.separator}>•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
