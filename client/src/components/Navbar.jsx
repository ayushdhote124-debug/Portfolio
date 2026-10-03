import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const { isDarkMode, toggleTheme, currentTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? currentTheme.navBg : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? `1px solid ${currentTheme.border}` : 'none',
        transition: 'all 0.3s ease',
        padding: scrolled ? '12px 24px' : '20px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '1.5rem',
            fontWeight: '800',
            color: currentTheme.textPrimary,
            textDecoration: 'none',
            letterSpacing: '-0.5px',
          }}
        >
          Ayush.
        </a>

        {/* Desktop Nav Items */}
        <nav
          style={{
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: currentTheme.textSecondary,
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = currentTheme.accent)}
              onMouseLeave={(e) => (e.target.style.color = currentTheme.textSecondary)}
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              padding: '8px 12px',
              borderRadius: '20px',
              backgroundColor: currentTheme.inputBg,
              border: `1px solid ${currentTheme.border}`,
              color: currentTheme.textPrimary,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              fontWeight: '600',
              transition: 'transform 0.2s ease',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {isDarkMode ? <Sun size={18} color="#FBBF24" /> : <Moon size={18} color="#6366F1" />}
            <span>{isDarkMode ? 'Light' : 'Dark'}</span>
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div
          style={{
            alignItems: 'center',
            gap: '12px',
          }}
          className="mobile-toggle"
        >
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              padding: '8px',
              borderRadius: '50%',
              backgroundColor: currentTheme.inputBg,
              border: `1px solid ${currentTheme.border}`,
              color: currentTheme.textPrimary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isDarkMode ? <Sun size={18} color="#FBBF24" /> : <Moon size={18} color="#6366F1" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              color: currentTheme.textPrimary,
              padding: '6px',
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: currentTheme.bgSecondary,
            borderBottom: `1px solid ${currentTheme.border}`,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: currentTheme.textPrimary,
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: '8px 0',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
