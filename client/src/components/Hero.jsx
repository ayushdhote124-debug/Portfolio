import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, Download, Mail } from 'lucide-react';

// Custom SVG Social Icons
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero = () => {
  const { currentTheme } = useTheme();

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 60px',
        position: 'relative',
        backgroundColor: currentTheme.bg,
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow circle */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(520px, 90vw)',
          height: 'min(520px, 90vw)',
          background: currentTheme.accentGlow,
          borderRadius: '50%',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="animate-fade-in"
      >
        {/* Floating tech stack badges */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '24px',
          }}
        >
          <span
            className="animate-float-badge-1"
            style={{
              padding: '6px 16px',
              borderRadius: '20px',
              backgroundColor: currentTheme.inputBg,
              border: `1px solid ${currentTheme.border}`,
              color: currentTheme.accent,
              fontSize: '0.85rem',
              fontWeight: '600',
              backdropFilter: 'blur(10px)',
            }}
          >
            ⚡ MERN Stack Specialist
          </span>
          <span
            className="animate-float-badge-2"
            style={{
              padding: '6px 16px',
              borderRadius: '20px',
              backgroundColor: currentTheme.inputBg,
              border: `1px solid ${currentTheme.border}`,
              color: '#A855F7',
              fontSize: '0.85rem',
              fontWeight: '600',
              backdropFilter: 'blur(10px)',
            }}
          >
            ⚛️ React & Redux Toolkit
          </span>
          <span
            className="animate-float-badge-3"
            style={{
              padding: '6px 16px',
              borderRadius: '20px',
              backgroundColor: currentTheme.inputBg,
              border: `1px solid ${currentTheme.border}`,
              color: '#EC4899',
              fontSize: '0.85rem',
              fontWeight: '600',
              backdropFilter: 'blur(10px)',
            }}
          >
            💚 Node & MongoDB Atlas
          </span>
        </div>

        {/* Hero Title */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '800',
            lineHeight: '1.15',
            color: currentTheme.textPrimary,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}
        >
          Hi, I'm <span className="gradient-shimmer-text">Ayush Dhote</span>
          <br />
          Full Stack MERN Developer
        </h1>

        {/* Hero Description */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: currentTheme.textSecondary,
            maxWidth: '720px',
            margin: '0 auto 36px',
            lineHeight: '1.7',
          }}
        >
          Specializing in MERN stack, building secure and scalable web applications. Designing RESTful APIs, JWT authentication, and structuring efficient database systems with clean architecture and performance optimization.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '48px',
          }}
        >
          <a
            href="#projects"
            className="btn-pulse"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '12px',
              background: currentTheme.gradient,
              color: '#FFFFFF',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <span>View Projects</span>
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '12px',
              backgroundColor: currentTheme.inputBg,
              border: `1px solid ${currentTheme.border}`,
              color: currentTheme.textPrimary,
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = currentTheme.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = currentTheme.border;
            }}
          >
            <Mail size={18} color={currentTheme.accent} />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          {[
            { icon: <GithubIcon />, href: 'https://github.com/ayushdhote124-debug', label: 'GitHub' },
            { icon: <LinkedinIcon />, href: 'https://www.linkedin.com/in/ayush-dhote-7b2023231', label: 'LinkedIn' },
            { icon: <Mail size={20} />, href: 'mailto:ayushdhote124@gmail.com', label: 'Email' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: currentTheme.inputBg,
                border: `1px solid ${currentTheme.border}`,
                color: currentTheme.textSecondary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = currentTheme.accent;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = currentTheme.textSecondary;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
