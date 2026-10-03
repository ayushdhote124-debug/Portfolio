import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ExternalLink, Folder } from 'lucide-react';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ProjectCard = ({ project }) => {
  const { currentTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="animated-card"
      style={{
        backgroundColor: currentTheme.cardBg,
        border: `1px solid ${currentTheme.border}`,
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Project Image Container */}
      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: currentTheme.inputBg,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
        ) : (
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: currentTheme.textSecondary,
            }}
          >
            <Folder size={48} opacity={0.4} />
          </div>
        )}
      </div>

      {/* Project Details */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: currentTheme.textPrimary,
            marginBottom: '10px',
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: currentTheme.textSecondary,
            fontSize: '0.92rem',
            lineHeight: '1.6',
            marginBottom: '20px',
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px',
          }}
        >
          {project.techStack?.map((tech, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.75rem',
                fontWeight: '600',
                padding: '4px 10px',
                borderRadius: '6px',
                backgroundColor: currentTheme.inputBg,
                color: currentTheme.accent,
                border: `1px solid ${currentTheme.border}`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            paddingTop: '16px',
            borderTop: `1px solid ${currentTheme.border}`,
          }}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: currentTheme.textSecondary,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = currentTheme.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = currentTheme.textSecondary)}
            >
              <GithubIcon /> Code
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: currentTheme.accent,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
