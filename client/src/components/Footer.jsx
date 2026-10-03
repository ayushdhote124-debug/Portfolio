import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { currentTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: currentTheme.bgSecondary,
        borderTop: `1px solid ${currentTheme.border}`,
        padding: '40px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <div style={{ color: currentTheme.textSecondary, fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Ayush Dhote. Built with MERN Stack (React & Node.js)
        </div>

        <button
          onClick={scrollToTop}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '20px',
            backgroundColor: currentTheme.inputBg,
            border: `1px solid ${currentTheme.border}`,
            color: currentTheme.textPrimary,
            fontSize: '0.85rem',
            fontWeight: '600',
          }}
        >
          <span>Back to Top</span>
          <ArrowUp size={16} color={currentTheme.accent} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
