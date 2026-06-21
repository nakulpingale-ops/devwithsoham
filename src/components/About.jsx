import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import { textReveal, flipReveal, staggerContainer, defaultViewport } from '../utils/animations';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={textReveal}
        >
          <span className="section-number">01</span>
          <h2>Hi!</h2>
        </motion.div>

        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div className={styles.textContent} variants={textReveal}>
            <h3 className={styles.headline}>
              Building Scalable Products That Solves Real Problems
            </h3>
            <p className={styles.paragraph}>
              I build backend systems, REST APIs, and enterprise software that power real-world workflows. My focus is creating scalable applications, improving operational efficiency, and shipping reliable solutions fast.
            </p>
            <p className={styles.paragraph}>
              From ERP platforms and authentication systems to AI-assisted development workflows, I enjoy turning complex business requirements into clean, maintainable software.
            </p>
          </motion.div>

          <motion.div className={`perspective-container ${styles.statsGrid}`} variants={staggerContainer}>
            {[
              { value: "2+", label: "Years Experience" },
              { value: "3+", label: "Production Roles" },
              { value: "10+", label: "Modules Delivered" },
              { value: "Multiple", label: "AI-Assisted Workflows" }
            ].map((stat, idx) => (
              <motion.div key={idx} className={`premium-card ${styles.blueCard}`} variants={flipReveal}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
