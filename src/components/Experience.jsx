import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';
import { textReveal, staggerContainer, defaultViewport } from '../utils/animations';

const jobs = [
  {
    role: "Software Developer",
    company: "JMP EDUTECH",
    duration: "Jul 2025 – Present",
    highlights: [
      "Architected and deployed comprehensive ERP modules for seamless admissions workflows.",
      "Engineered secure Role-Based Access Control (RBAC) systems.",
      "Built high-performance REST APIs for exam management and reporting systems.",
      "Integrated Chart.js dashboards for real-time analytics.",
      "Accelerated development velocity by leveraging AI-assisted development workflows."
    ]
  },
  {
    role: "Junior Software Developer",
    company: "ICODEX PUBLISHING SOLUTIONS",
    duration: "Sep 2024 – Feb 2025",
    highlights: [
      "Developed and maintained robust backend services and REST APIs.",
      "Implemented secure OAuth authentication flows.",
      "Integrated Redis for caching and RabbitMQ for asynchronous message processing.",
      "Utilized Splunk for monitoring system health and debugging production issues."
    ]
  },
  {
    role: "Project Coordinator Intern",
    company: "ICODEX PUBLISHING SOLUTIONS",
    duration: "Jun 2023 – Dec 2023",
    highlights: [
      "Streamlined requirements documentation and API testing processes.",
      "Collaborated on building real-time collaboration systems using SignalR."
    ]
  }
];

const Experience = () => {
  return (
    <section className={`section ${styles.experienceSection}`} id="experience">
      <div className="container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={textReveal}
        >
          <span className="section-number">02</span>
          <h2>EXPERIENCE</h2>
        </motion.div>

        <motion.div
          className={styles.timeline}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {jobs.map((job, idx) => (
            <motion.div key={idx} className={styles.timelineItem} variants={textReveal}>
              <div className={styles.timelineContent}>
                <div className={styles.jobHeader}>
                  <div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <div className={styles.company}>{job.company}</div>
                  </div>
                  <div className={styles.duration}>{job.duration}</div>
                </div>

                <div className={styles.contributions}>
                  <h4 className={styles.contribTitle}>Key Contributions</h4>
                  <ul className={styles.bulletList}>
                    {job.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
