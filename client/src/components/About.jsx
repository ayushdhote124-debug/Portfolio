import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Code, Server, Database, Sparkles } from 'lucide-react';

const About = () => {
  const { currentTheme } = useTheme();

  const stats = [
    { number: 'MERN', label: 'Stack Specialist' },
    { number: '2+', label: 'Featured Projects' },
    { number: 'M.Tech', label: 'Pursuing (2024-2026)' },
  ];

  const highlights = [
    {
      icon: <Code size={24} color={currentTheme.accent} />,
      title: 'Frontend Development',
      desc: 'Crafting responsive, pixel-perfect user interfaces with React, modern JavaScript (ES6+), and clean CSS architectures.',
    },
    {
      icon: <Server size={24} color="#A855F7" />,
      title: 'Backend Engineering',
      desc: 'Designing scalable RESTful APIs with Node.js & Express, featuring JWT authentication and robust error handling.',
    },
    {
      icon: <Database size={24} color="#EC4899" />,
      title: 'Database Architecture',
      desc: 'Structuring efficient data models and queries with MongoDB and Mongoose ODM for fast, reliable data persistence.',
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '100px 24px',
        backgroundColor: currentTheme.bgSecondary,
        borderTop: `1px solid ${currentTheme.border}`,
        borderBottom: `1px solid ${currentTheme.border}`,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: currentTheme.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginBottom: '10px',
            }}
          >
            <Sparkles size={16} /> About Me
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: currentTheme.textPrimary,
            }}
          >
            Passionate About Crafting Web Solutions
          </h2>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: '850px',
            margin: '0 auto 50px',
            textAlign: 'center',
            fontSize: '1.05rem',
            color: currentTheme.textSecondary,
            lineHeight: '1.8',
          }}
        >
          Full Stack Developer specializing in the MERN stack. Certified MERN developer from Codeez IT Training Institute with hands-on experience building production-ready applications with Role-Based Access Control, JWT security, and RESTful API architectures. Currently pursuing M.Tech at Oriental College of Technology, Bhopal.
        </motion.div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginBottom: '60px',
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="animated-card"
              style={{
                backgroundColor: currentTheme.cardBg,
                border: `1px solid ${currentTheme.border}`,
                borderRadius: '16px',
                padding: '30px 20px',
                textAlign: 'center',
                boxShadow: currentTheme.shadows?.card,
              }}
            >
              <h3
                className="logo-gradient-text"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  marginBottom: '8px',
                }}
              >
                {stat.number}
              </h3>
              <p style={{ color: currentTheme.textSecondary, fontWeight: '500' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px',
          }}
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className="animated-card"
              style={{
                backgroundColor: currentTheme.cardBg,
                border: `1px solid ${currentTheme.border}`,
                borderRadius: '16px',
                padding: '32px 24px',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: currentTheme.inputBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                {item.icon}
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: currentTheme.textPrimary, marginBottom: '12px' }}>
                {item.title}
              </h4>
              <p style={{ color: currentTheme.textSecondary, fontSize: '0.95rem', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
