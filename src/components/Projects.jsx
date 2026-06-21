import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Projects.module.css';
import { textReveal, cardReveal, staggerContainer, defaultViewport } from '../utils/animations';

const projects = [
  {
    title: "SEO-Optimized Business Discovery Platform",
    desc: "Built using Next.js, PostgreSQL, Node.js and Tailwind.",
    highlights: ["SSR", "JWT Authentication", "Secure APIs", "Scalable Database Design"]
  },
  {
    title: "Real-Time Educational Analytics Platform",
    desc: "Dashboard for monitoring government school schemes.",
    highlights: ["Live Firestore Sync", "Data Visualization", "Reporting Interface", "Monitoring"]
  }
];

const ProjectItem = ({ project }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  // Subtle parallax effect, max 12px
  const y = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <motion.div ref={ref} style={{ y }} className="perspective-container">
      <motion.div className={styles.listItem} variants={cardReveal}>
        <div className={styles.itemLeft}>
          <h3 className={styles.itemTitle}>{project.title}</h3>
          <p className={styles.itemDesc}>{project.desc}</p>
        </div>
        <p className={styles.itemTags}>{project.highlights.join(' • ')}</p>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section 
      className="section" 
      id="projects"
      style={{
        backgroundColor: '#050505',
        '--color-text': '#ffffff',
        '--color-text-secondary': '#a0a0a0',
        '--color-border': '#222222',
        '--color-bg-hover': '#111111',
        paddingTop: '6rem',
        paddingBottom: '6rem'
      }}
    >
      <div className="container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={textReveal}
        >
          <span className="section-number">03</span>
          <h2>FEATURED PROJECTS</h2>
        </motion.div>

        <motion.div
          className={styles.listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {projects.map((project, idx) => (
            <ProjectItem key={idx} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
