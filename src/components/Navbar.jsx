import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/Soham Desai_Software Developer_Resume.pdf', download: 'Soham Desai_Software Developer_Resume.pdf' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/soham-desai-38a296258/', external: true },
    { name: 'GitHub', href: 'https://github.com/Soham8848', external: true },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.pill}>
          <div className={styles.logo}>Soham Desai</div>
          <button className={styles.menuButton} onClick={toggleMenu} aria-label="Open menu">
            ☰
          </button>
        </div>
        <div className={styles.openToWork}>
          <span className={styles.pulsatingCircle}></span>
          Open to work
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className={styles.closeButton} onClick={toggleMenu} aria-label="Close menu">
              <div className={styles.logo}>Soham Desai</div>
              <div className={styles.closeIcon}>✕</div>
            </button>
            {/* Mobile-only close button — top-right corner */}
            <button
              className={styles.mobileCloseBtn}
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
            <nav className={styles.menuContainer}>
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={styles.menuLink}
                  onClick={toggleMenu}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  download={item.download ? true : undefined}
                  initial={{ opacity: 0, scale: 0, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ 
                    delay: 0.1 + i * 0.08, 
                    duration: 0.5, 
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
