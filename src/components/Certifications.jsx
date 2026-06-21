import React from 'react';
import { motion } from 'framer-motion';
import styles from './Certifications.module.css';
import { textReveal, staggerContainer, defaultViewport } from '../utils/animations';

const certs = [
  { title: "Data Structures & Algorithms", tags: "Coursera" },
  { title: "Introduction to IoT", tags: "NPTEL" },
  { title: "Codement Hackathon", tags: "Participant" }
];

const Certifications = () => {
  return (
    <section className="section" id="certifications" style={{ paddingTop: 0 }}>
      <div className="container">
        <motion.div 
          className={styles.listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {certs.map((cert, idx) => (
            <motion.div key={idx} className={styles.listItem} variants={textReveal}>
              <h3 className={styles.itemTitle}>{cert.title}</h3>
              <p className={styles.itemTags}>{cert.tags}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
