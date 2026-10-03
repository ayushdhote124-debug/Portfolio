// Theme constants JS Object (Colors, Typography, Spacing, & Glassmorphism design tokens)

export const theme = {
  fonts: {
    primary: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    code: "'Fira Code', monospace",
  },
  colors: {
    dark: {
      bg: '#0B0F19',
      bgSecondary: '#111827',
      cardBg: 'rgba(17, 24, 39, 0.75)',
      textPrimary: '#F9FAFB',
      textSecondary: '#9CA3AF',
      accent: '#6366F1', // Indigo
      accentGlow: 'rgba(99, 102, 241, 0.35)',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #EC4899 100%)',
      border: 'rgba(255, 255, 255, 0.08)',
      navBg: 'rgba(11, 15, 25, 0.85)',
      inputBg: 'rgba(255, 255, 255, 0.05)',
      success: '#10B981',
      error: '#EF4444',
    },
    light: {
      bg: '#F8FAFC',
      bgSecondary: '#FFFFFF',
      cardBg: 'rgba(255, 255, 255, 0.85)',
      textPrimary: '#0F172A',
      textSecondary: '#475569',
      accent: '#4F46E5',
      accentGlow: 'rgba(79, 70, 229, 0.2)',
      gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #DB2777 100%)',
      border: 'rgba(0, 0, 0, 0.08)',
      navBg: 'rgba(248, 250, 252, 0.85)',
      inputBg: 'rgba(0, 0, 0, 0.03)',
      success: '#059669',
      error: '#DC2626',
    },
  },
  transitions: {
    default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: 'all 0.15s ease-in-out',
  },
  shadows: {
    card: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
    glow: '0 0 20px rgba(99, 102, 241, 0.4)',
  },
};
