import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ProjectCard from './ProjectCard';
import { fetchProjects } from '../services/api';
import { Briefcase } from 'lucide-react';

const Projects = () => {
  const { currentTheme } = useTheme();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend'];

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      const catFilter = activeCategory === 'All' ? '' : activeCategory;
      const data = await fetchProjects(catFilter);
      setProjects(data);
      setLoading(false);
    };
    getProjects();
  }, [activeCategory]);

  return (
    <section
      id="projects"
      style={{
        padding: '100px 24px',
        backgroundColor: currentTheme.bgSecondary,
        borderTop: `1px solid ${currentTheme.border}`,
        borderBottom: `1px solid ${currentTheme.border}`,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
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
            <Briefcase size={16} /> My Portfolio
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: currentTheme.textPrimary,
              marginBottom: '20px',
            }}
          >
            Featured Projects
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                backgroundColor: activeCategory === cat ? currentTheme.accent : currentTheme.inputBg,
                color: activeCategory === cat ? '#FFFFFF' : currentTheme.textSecondary,
                border: `1px solid ${activeCategory === cat ? currentTheme.accent : currentTheme.border}`,
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: currentTheme.textSecondary }}>
            Loading projects...
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
              gap: '30px',
            }}
          >
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
