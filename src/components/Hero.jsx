import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 15 } }
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative', overflow: 'hidden' }} className="section-container">
      {/* Decorative blurred animated blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', top: '10%', right: '10%', width: '40vw', height: '40vw', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.3, borderRadius: '50%', zIndex: -1 }}
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
        style={{ position: 'absolute', bottom: '-10%', left: '5%', width: '35vw', height: '35vw', background: 'var(--secondary)', filter: 'blur(100px)', opacity: 0.2, borderRadius: '50%', zIndex: -1 }}
      />

      <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center', width: '100%', position: 'relative', zIndex: 1 }}>
        
        {/* Left Side: Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '800px' }}
        >
          <motion.h2 variants={itemVariants} style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 500 }}>
            Hi there, I am
          </motion.h2>
          
          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem', background: 'linear-gradient(to right, #ffffff 30%, var(--primary))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.03em' }}>
            Nitya Sai Pranathi
          </motion.h1>
          
          <motion.h3 variants={itemVariants} style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', fontWeight: 700, background: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '2rem' }}>
            Full Stack Developer
          </motion.h3>
          
          <motion.p variants={itemVariants} style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '3.5rem', maxWidth: '650px', lineHeight: 1.8 }}>
            Passionate about building innovative web applications using modern technologies. 
            Experienced in Machine Learning, Data Analysis, and MERN Stack Development.
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: '1rem 2.5rem', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white', fontWeight: 600, borderRadius: '12px', border: 'none', cursor: 'pointer', display: 'inline-block' }}
            >
              Get In Touch
            </motion.a>
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: '1rem 2.5rem', background: 'rgba(255, 255, 255, 0.03)', color: 'var(--text-main)', fontWeight: 600, borderRadius: '12px', border: '1px solid var(--border-glass)', display: 'inline-block', backdropFilter: 'blur(10px)' }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.4, delay: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '1/1' }}>
            {/* Glowing orb behind image */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', top: '-5%', left: '-5%', right: '-5%', bottom: '-5%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', filter: 'blur(20px)', opacity: 0.5, zIndex: -1 }}
            />
            
            {/* Image Container */}
            <div style={{ width: '100%', height: '100%', borderRadius: '24px', overflow: 'hidden', border: '2px solid var(--border-glass)', background: 'var(--bg-card)', backdropFilter: 'blur(16px)', padding: '0.5rem' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '20px', overflow: 'hidden' }}>
                <img 
                  src="/profile.jpeg" 
                  alt="Nitya Sai Pranathi" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%230f172a'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='20' fill='%23cbd5e1' text-anchor='middle' dominant-baseline='middle'%3EPlease save your photo as profile.jpeg in the public folder%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
