import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="title-wrapper">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="section-title"
        >
          About Me
        </motion.h2>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card" 
          style={{ padding: '4rem', position: 'relative' }}
        >
          {/* Subtle gradient background element for the card */}
          <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.05) 0%, transparent 50%)', pointerEvents: 'none', zIndex: 0 }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1.9, marginBottom: '2.5rem', fontWeight: 300 }}
            >
              I am a passionate and results-driven individual with strong skills in Machine Learning, Data Analysis, and full-stack web development using the MERN stack (MongoDB, Express.js, React, Node.js). I have a solid foundation in programming algorithms and software development, and I enjoy solving real-world problems through technology.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.9, fontWeight: 300 }}
            >
              I am experienced in building scalable web applications and applying machine learning models to extract insights from data. I am eager to contribute my technical skills and grow in a collaborative, fast-paced environment.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
