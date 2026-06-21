import React from 'react';
import { motion } from 'framer-motion';
import styles from './AchievementStrip.module.css';
import { textReveal, staggerContainer, defaultViewport } from '../utils/animations';

const achievements = [
  { title: "Built ERP Modules", tags: "Node.js • PostgreSQL • React" },
  { title: "Implemented RBAC Systems", tags: "Authentication • Authorization • Security" },
  { title: "Designed REST APIs", tags: "Express • JWT • Swagger" },
  { title: "Integrated Redis & RabbitMQ", tags: "Caching • Message Queues • Microservices" },
  { title: "Leveraged AI Workflows", tags: "Automation • Generative AI • Python" }
];

const AchievementStrip = () => {
  return (
    <section className={`section ${styles.stripSection}`} id="services" style={{ paddingBottom: '4rem' }}>
      <div className="container">
        <motion.h2 
          className={styles.mainTitle}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={textReveal}
        >
          Key Implementations
        </motion.h2>

        <motion.div 
          className={styles.listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {achievements.map((item, idx) => (
            <motion.div key={idx} className={styles.listItem} variants={textReveal}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemTags}>{item.tags}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementStrip;
