import React from 'react';
import { motion } from 'framer-motion';
import styles from './AIDevelopment.module.css';
import { textReveal, staggerContainer, defaultViewport } from '../utils/animations';

const capabilities = [
  { title: "Prompt Engineering", tags: "Context Optimization • Iterative Refinement" },
  { title: "Code Generation", tags: "Boilerplate • Algorithmic Logic • Testing" },
  { title: "Workflow Automation", tags: "CI/CD • Scripts • Repetitive Tasks" },
  { title: "Debug Assistance", tags: "Log Analysis • Error Resolution • Profiling" }
];

const AIDevelopment = () => {
  return (
    <section className="section" id="ai-development" style={{ marginTop: '-42px' }}>
      <div className="container">
        <motion.h2
          className={styles.mainTitle}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={textReveal}
        >
          Generative AI stack
        </motion.h2>

        <motion.div
          className={styles.listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {capabilities.map((item, idx) => (
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

export default AIDevelopment;
