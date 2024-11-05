// src/components/ThemeSwitcher.js
import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';  // Importing icons from react-icons
import ThemeContext from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-switcher" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      {theme === 'light' ? (
        <FaMoon size={24} color="#333" />  // Moon icon for light mode
      ) : (
        <FaSun size={24} color="#f39c12" />  // Sun icon for dark mode
      )}
    </button>
  );
};

export default ThemeSwitcher;
