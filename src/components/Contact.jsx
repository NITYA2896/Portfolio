import React, { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const PremiumContactCard = ({ icon: Icon, title, value, href, delay }) => {
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
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 60 }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="glass-card"
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1.5rem', 
        padding: '2rem', 
        textDecoration: 'none',
        position: 'relative',
      }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <motion.div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.15), transparent 80%)`,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, background: 'linear-gradient(135deg, var(--primary), var(--secondary))', padding: '1.2rem', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 10px 20px -5px rgba(16, 185, 129, 0.3)' }}>
        <Icon size={28} color="white" />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.3rem', letterSpacing: '0.02em' }}>{title}</h4>
        <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{value}</p>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-container" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <div className="title-wrapper">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="section-title"
        >
          Let's Connect
        </motion.h2>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <PremiumContactCard 
          icon={Mail}
          title="Email"
          value="nitya.potti2896@gmail.com"
          href="mailto:nitya.potti2896@gmail.com"
          delay={0.1}
        />
        <PremiumContactCard 
          icon={Github}
          title="GitHub"
          value="github.com/NITYA2896"
          href="https://github.com/NITYA2896"
          delay={0.2}
        />
        <PremiumContactCard 
          icon={Linkedin}
          title="LinkedIn"
          value="linkedin.com/in/nitya-sai-pranathi-potti"
          href="https://linkedin.com/in/nitya-sai-pranathi-potti"
          delay={0.3}
        />
        <PremiumContactCard 
          icon={Phone}
          title="Phone"
          value="+91-8555875963"
          href="tel:+918555875963"
          delay={0.4}
        />
      </div>
    </section>
  );
};

export default Contact;
