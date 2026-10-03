import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Cpu, Layout, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const { currentTheme } = useTheme();

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout size={22} color={currentTheme.accent} />,
      skills: [
        { name: 'React.js & Redux Toolkit', level: '92%' },
        { name: 'JavaScript (ES6+)', level: '95%' },
        { name: 'Tailwind CSS & CSS3', level: '90%' },
        { name: 'HTML5 & Responsive Design', level: '95%' },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: <Server size={22} color="#A855F7" />,
      skills: [
        { name: 'Node.js & Express.js', level: '90%' },
        { name: 'RESTful APIs & MVC', level: '92%' },
        { name: 'JWT Auth & bcrypt', level: '88%' },
        { name: 'Middleware Handling', level: '90%' },
      ],
    },
    {
      title: 'Database & Tools',
      icon: <Database size={22} color="#EC4899" />,
      skills: [
        { name: 'MongoDB & Mongoose', level: '90%' },
        { name: 'Cloudinary Integration', level: '85%' },
        { name: 'Git, GitHub & Postman', level: '92%' },
        { name: 'Deployment (Vercel / Render)', level: '88%' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: '100px 24px',
        backgroundColor: currentTheme.bg,
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
            <Cpu size={16} /> Tech Stack & Tools
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: currentTheme.textPrimary,
            }}
          >
            Technologies I Work With
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '30px',
          }}
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="animated-card"
              style={{
                backgroundColor: currentTheme.cardBg,
                border: `1px solid ${currentTheme.border}`,
                borderRadius: '16px',
                padding: '32px 24px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '28px',
                }}
              >
                <div
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    backgroundColor: currentTheme.inputBg,
                  }}
                >
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: currentTheme.textPrimary }}>
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: currentTheme.textPrimary,
                        marginBottom: '8px',
                      }}
                    >
                      <span>{skill.name}</span>
                      <span style={{ color: currentTheme.accent }}>{skill.level}</span>
                    </div>
                    <div
                      style={{
                        height: '6px',
                        width: '100%',
                        backgroundColor: currentTheme.inputBg,
                        borderRadius: '3px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        className="skill-bar-shine"
                        style={{
                          height: '100%',
                          width: skill.level,
                          background: currentTheme.gradient,
                          borderRadius: '3px',
                          transition: 'width 1s ease',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
