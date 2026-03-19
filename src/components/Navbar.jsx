import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 50,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: scrolled ? 'rgba(2, 6, 23, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(to right, #ffffff, var(--primary))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'flex', alignItems: 'center', letterSpacing: '-0.02em' }}>
          <span>Nitya Sai Pranathi</span>
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'none' }} className="desktop-menu">
          <ul style={{ display: 'flex', gap: '2.5rem' }}>
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, type: "spring" }}
              >
                <a 
                  href={link.href}
                  className="nav-link"
                  style={{ 
                    fontWeight: 500, 
                    color: 'var(--text-muted)',
                    position: 'relative',
                    padding: '0.5rem 0',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <style>{`
          @media (min-width: 768px) {
            .desktop-menu { display: block !important; }
            .mobile-toggle { display: none !important; }
          }
          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            transition: width 0.3s ease;
          }
          .nav-link:hover::after {
            width: 100%;
          }
        `}</style>

        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', display: 'flex', zIndex: 60 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'rgba(2, 6, 23, 0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border-glass)', overflow: 'hidden' }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '3rem 0' }}>
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '0.05em' }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
