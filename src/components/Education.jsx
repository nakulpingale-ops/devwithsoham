import React from 'react';
import { motion } from 'framer-motion';
import styles from './Education.module.css';
import { textReveal, staggerContainer, defaultViewport } from '../utils/animations';

const education = [
  {
    title: "B.Tech Computer Engineering",
    desc: "G.H. Raisoni College of Engineering & Management • CGPA: 8.15 / 10",
    tags: "Data Structures • Algorithms • DBMS • Machine Learning • Web Development • Object-Oriented Programming"
  }
];

const Education = () => {
  return (
    <section className="section" id="education" style={{ paddingBottom: 0 }}>
      <div className="container">
        <motion.div 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={textReveal}
        >
          <span className="section-number">04</span>
          <h2>EDUCATION</h2>
        </motion.div>

        <motion.div 
          className={styles.listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {education.map((item, idx) => (
            <motion.div key={idx} className={styles.listItem} variants={textReveal}>
              <div className={styles.itemLeft}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
              <p className={styles.itemTags}>{item.tags}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
