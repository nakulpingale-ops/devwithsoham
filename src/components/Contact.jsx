import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import styles from './Contact.module.css';
import { textReveal, defaultViewport } from '../utils/animations';

const Contact = () => {
  return (
    <>
      <section className={styles.contactSection} id="contact">
        <div className={`container ${styles.container}`}>
          <motion.div
            className={styles.contactGrid}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={textReveal}
          >
            {/* Left Column */}
            <div className={styles.leftCol}>
              <h2 className={styles.headline}>LET'S TALK.</h2>
              <a href="tel:8459412241" className={styles.phoneNumber} style={{ display: 'block' }}>8459412241</a>
              <p className={styles.supportingText}>
                Interested in backend engineering, software development, AI-powered workflows, or collaborative product projects?
                <br /><br />
                Let's connect and build something impactful.
              </p>

              <div className={styles.socialIcons}>
                <a href="https://www.linkedin.com/in/soham-desai-38a296258/" target="_blank" rel="noreferrer" className={styles.iconBox} aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://github.com/Soham8848" target="_blank" rel="noreferrer" className={styles.iconBox} aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
                  </svg>
                </a>
                <a href="mailto:sohamdesai1009@gmail.com" className={styles.iconBox} aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className={styles.rightCol}>
              <div className={styles.formPanel}>
                <form action="https://formsubmit.co/sohamdesai1009@gmail.com" method="POST" className={styles.contactForm}>
                  <input type="hidden" name="_next" value={window.location.href} />
                  <input type="hidden" name="_subject" value="New contact from Soham's Portfolio!" />

                  <div className={styles.formGroup}>
                    <input type="text" name="name" placeholder="Name" required className={styles.inputField} />
                  </div>

                  <div className={styles.formGroup}>
                    <input type="email" name="email" placeholder="Email" required className={styles.inputField} />
                  </div>

                  <div className={styles.formGroup}>
                    <input type="text" name="project" placeholder="Project Details" required className={styles.inputField} />
                  </div>

                  <div className={styles.formGroup}>
                    <textarea name="message" placeholder="Message" required className={`${styles.inputField} ${styles.textareaField}`}></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn}>SEND MESSAGE</button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className={styles.footerSection}>
        <div className={styles.watermark}>SOHAM</div>

        <div className={`container ${styles.footerGrid}`}>
          <div className={styles.footerLeft}>
            <h2 className={styles.footerHeadline}>BUILDING<br />SCALABLE<br />PRODUCTS.</h2>
          </div>

          <div className={styles.footerCenter}>
            <h3 className={styles.footerSubtitle}>/Quick Links</h3>
            <div className={styles.pillLinks}>
              <a href="#about" className={styles.pillBtn}>About</a>
              <a href="#experience" className={styles.pillBtn}>Experience</a>
              <a href="#projects" className={styles.pillBtn}>Projects</a>
              <a href="#skills" className={styles.pillBtn}>Tech Stack</a>
              <a href="#contact" className={styles.pillBtn}>Contact</a>
            </div>
          </div>

          <div className={styles.footerRight}>
            <h3 className={styles.footerSubtitle}>/Contact</h3>
            <div className={styles.verticalLinks}>
              <a href="mailto:sohamdesai1009@gmail.com" className={styles.footerLink}>sohamdesai1009@gmail.com</a>
              <a href="tel:8459412241" className={styles.footerLink}>8459412241</a>
              <a href="https://www.linkedin.com/in/soham-desai-38a296258/" target="_blank" rel="noreferrer" className={styles.footerLink}>LinkedIn</a>
              <a href="https://github.com/Soham8848" target="_blank" rel="noreferrer" className={styles.footerLink}>GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
