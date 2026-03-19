import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const PremiumCard = ({ children, delay }) => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 50 }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative'
      }}
    >
      <motion.div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      {children}
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'To Do List Application',
      description: 'A full-stack task management application built with MERN stack. Features include task creation, updating, deletion, and priority management with a responsive user interface.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      githubLink: 'https://github.com/NITYA2896/Task-Manager'
    },
    {
      title: 'IPL Match Prediction',
      description: 'Machine learning model to predict IPL match outcomes using historical data. Implemented data analysis and visualization techniques to identify patterns and improve prediction accuracy.',
      technologies: ['Python', 'Machine Learning', 'Data Analysis'],
      githubLink: 'https://github.com/NITYA2896/IPL-IN-GAME-PREDICTION'
    },
    {
      title: 'Hand Gesture Based Emoji Recognition',
      description: 'Computer vision application that recognizes hand gestures and converts them into corresponding emojis in real-time. Uses deep learning for gesture classification.',
      technologies: ['Python', 'TensorFlow', 'Computer Vision', 'Deep Learning'],
      githubLink: 'https://github.com/NITYA2896/HandGestureBasedEmojiRecognition'
    }
  ];

  return (
    <section id="projects" className="section-container" style={{ paddingTop: '80px' }}>
      <div className="title-wrapper">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My Projects
        </motion.h2>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((project, idx) => (
          <PremiumCard key={project.title} delay={idx * 0.15}>
            <div style={{ padding: '2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', zIndex: 1, position: 'relative' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem', flexGrow: 1 }}>
                {project.description}
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} style={{ fontSize: '0.85rem', padding: '0.4rem 1rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '9999px', color: '#93c5fd', fontWeight: 500 }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div style={{ padding: '1.5rem 2.5rem', background: 'rgba(0, 0, 0, 0.2)', borderTop: '1px solid var(--border-glass)', zIndex: 1, position: 'relative' }}>
              <motion.a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ x: 5, color: '#fff' }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, transition: 'color 0.3s ease' }}
              >
                <Github size={18} /> View on GitHub
              </motion.a>
            </div>
          </PremiumCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
