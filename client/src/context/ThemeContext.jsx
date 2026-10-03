import React, { createContext, useContext, useState, useEffect } from 'react';
import { theme as themeTokens } from '../styles/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio_theme');
    return savedTheme ? savedTheme === 'dark' : true; // Default to dark mode
  });

  useEffect(() => {
    const themeMode = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('portfolio_theme', themeMode);
    document.documentElement.setAttribute('data-theme', themeMode);
    document.body.setAttribute('data-theme', themeMode);
    document.body.style.backgroundColor = isDarkMode ? '#0B0F19' : '#F8FAFC';
    document.body.style.color = isDarkMode ? '#F9FAFB' : '#0F172A';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const currentTheme = isDarkMode ? themeTokens.colors.dark : themeTokens.colors.light;

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        currentTheme,
        themeTokens,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
