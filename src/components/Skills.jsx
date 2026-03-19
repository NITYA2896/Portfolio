import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.6, type: "spring", stiffness: 60 }}
    className="glass-card"
    style={{ padding: '2.5rem' }}
  >
    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '1rem', letterSpacing: '0.05em' }}>
      {title}
    </h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {skills.map((skill, i) => (
        <motion.span 
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + (i * 0.05), type: "spring" }}
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: 'rgba(59, 130, 246, 0.5)' }}
          style={{ 
            background: 'rgba(255, 255, 255, 0.03)', 
            color: '#e2e8f0', 
            padding: '0.6rem 1.2rem', 
            borderRadius: '12px',
            fontSize: '0.95rem',
            fontWeight: 500,
            border: '1px solid var(--border-glass)',
            cursor: 'default',
            transition: 'background 0.3s ease, border-color 0.3s ease'
          }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    { title: 'Frontend Development', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'] },
    { title: 'Backend Development', skills: ['Node.js', 'Express.js'] },
    { title: 'Databases', skills: ['MySQL', 'MongoDB'] },
    { title: 'Programming Languages', skills: ['Python', 'Java'] },
  ];

  const certifications = [
    { title: 'Azure DP900 Fundamentals', issuer: 'Microsoft' },
    { title: 'MERN Stack developer', issuer: 'BlackBucks' },
    { title: 'Software Engineering', issuer: 'Coursera' }
  ];

  return (
    <section id="skills" className="section-container" style={{ paddingTop: '80px' }}>
      <div className="title-wrapper">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="section-title"
        >
          Skills & Certifications
        </motion.h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
        {categories.map((cat, idx) => (
          <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} delay={0.1 * idx} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card"
        style={{ padding: '3.5rem', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 100%)' }}
      >
        <h3 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '3rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
          Certifications
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {certifications.map((cert, idx) => (
            <motion.div 
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.15)' }}
              style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-glass)', cursor: 'default' }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px -5px rgba(16, 185, 129, 0.4)' }}>
                <span style={{ color: 'white', fontWeight: 'bold' }}>★</span>
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>{cert.title}</h4>
              <p style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
