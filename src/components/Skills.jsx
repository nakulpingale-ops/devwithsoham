import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import { textReveal, flipReveal, staggerContainer, defaultViewport } from '../utils/animations';

const skillSets = [
  { title: "Languages", tags: "C# • JavaScript (ES6+) • Java • SQL" },
  { title: "Frameworks & Libraries", tags: "ASP.NET MVC • .NET Web API • Next.js • Vite.js • SignalR" },
  { title: "Databases", tags: "SQL Server • MySQL • PostgreSQL • Firebase Firestore • Supabase • Redis Cache" },
  { title: "Cloud & DevOps", tags: "AWS EC2 • RabbitMQ • Splunk • Git • GitHub • Android Studio" },
  { title: "Reporting & Integrations", tags: "RDLC / SSRS PDF Reporting • PayPal/Stripe API • Gmail OAuth 2.0 SSO • JWT Auth" },
  { title: "Concepts", tags: "OOP • MVC Architecture • RESTful API Design • Asynchronous Programming • RBAC" }
];

const Skills = () => {
  return (
    <section className={`section ${styles.skillsSection}`} id="skills" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="container">
        <motion.h2
          className={styles.mainTitle}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={textReveal}
        >
          Core technical skills
        </motion.h2>

        <motion.div
          className={`perspective-container ${styles.gridContainer}`}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {skillSets.map((item, idx) => (
            <motion.div key={idx} className={styles.gridCard} variants={flipReveal}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardTags}>{item.tags}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
