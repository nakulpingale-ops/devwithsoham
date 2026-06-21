import React from 'react';
import { motion } from 'framer-motion';
import DecryptedText from './DecryptedText';
import styles from './Hero.module.css';
import { heroReveal, textReveal } from '../utils/animations';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.bgVideo}
      >
        <source src="/BG.mp4" type="video/mp4" />
      </video>
      <div className={styles.centerContent}>
        <motion.div
          className={styles.titleWrapper}
          initial="hidden"
          animate="visible"
          variants={heroReveal}
        >
          {/* Decorative floating assets positioned relative to text */}
          <h1 className={styles.title}>
            <span className={`${styles.titleRow} ${styles.rowTop}`}>
              <img src="/Hero_1.png" className={styles.heroImg1} alt="" />
              <span className={styles.textWrapper}>
                <DecryptedText text="SOFTWARE" speed={60} maxIterations={15} animateOn="hover" />
              </span>
            </span>
            <span className={`${styles.titleRow} ${styles.rowBottom}`}>
              <span className={styles.textWrapper}>
                <DecryptedText text="ENGINEER" speed={60} maxIterations={15} animateOn="hover" />
              </span>
              <img src="/Hero_2.png" className={styles.heroImg2} alt="" />
            </span>
          </h1>
        </motion.div>
      </div>

      <motion.div 
        className={styles.socialSidebar}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.lineIndicator}>
          <span className={styles.dot}></span>
          <div className={styles.line}></div>
          <span className={styles.dot}></span>
        </div>
        <a href="https://www.linkedin.com/in/soham-desai-38a296258/" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
          <div className={styles.socialImage} style={{ WebkitMaskImage: 'url(/LinkedIn.png)', maskImage: 'url(/LinkedIn.png)' }}></div>
        </a>
        <a href="https://wa.me/918459412241" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
          <div className={styles.socialImage} style={{ WebkitMaskImage: 'url(/whatsapp.png)', maskImage: 'url(/whatsapp.png)' }}></div>
        </a>
        <a href="https://github.com/Soham8848" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="GitHub">
          <div className={styles.socialImage} style={{ WebkitMaskImage: 'url(/Git.png)', maskImage: 'url(/Git.png)' }}></div>
        </a>
      </motion.div>

      <motion.div
        className={styles.bottomStrip}
        initial="hidden"
        animate="visible"
        variants={textReveal}
        transition={{ delay: 0.5 }}
      >
        <div className={styles.left}>
          ©2026
        </div>
        <a
          href="/Soham Desai_Software Developer_Resume.pdf"
          download="Soham Desai_Software Developer_Resume.pdf"
          className={styles.resumeCta}
        >
          Download Resume
        </a>
        <div className={styles.mobileSocials}>
          <a href="https://www.linkedin.com/in/soham-desai-38a296258/" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
            <div className={styles.socialImage} style={{ WebkitMaskImage: 'url(/LinkedIn.png)', maskImage: 'url(/LinkedIn.png)' }}></div>
          </a>
          <a href="https://wa.me/918459412241" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
            <div className={styles.socialImage} style={{ WebkitMaskImage: 'url(/whatsapp.png)', maskImage: 'url(/whatsapp.png)' }}></div>
          </a>
          <a href="https://github.com/Soham8848" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="GitHub">
            <div className={styles.socialImage} style={{ WebkitMaskImage: 'url(/Git.png)', maskImage: 'url(/Git.png)' }}></div>
          </a>
        </div>
        <div className={styles.right}>
          CREATING PRODUCTS SINCE 2023
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
