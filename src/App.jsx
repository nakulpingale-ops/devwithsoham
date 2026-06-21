import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import AchievementStrip from './components/AchievementStrip';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AIDevelopment from './components/AIDevelopment';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: 'var(--color-accent)',
          transformOrigin: '0%',
          zIndex: 1000,
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <div
          style={{
            backgroundColor: '#050505',
            paddingTop: '4rem',
            paddingBottom: '2rem',
            position: 'relative',
            zIndex: 1,
            '--color-text': '#ffffff',
            '--color-text-secondary': '#a0a0a0',
            '--color-border': '#222222',
            '--color-bg-hover': '#111111'
          }}
        >
          <AchievementStrip />
          <Skills />
          <AIDevelopment />
        </div>
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

export default App;
