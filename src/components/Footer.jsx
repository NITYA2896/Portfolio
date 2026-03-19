import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ padding: '3rem 0', marginTop: '4rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500, letterSpacing: '0.05em' }}
        >
          &copy; {new Date().getFullYear()} Nitya Sai Pranathi.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
