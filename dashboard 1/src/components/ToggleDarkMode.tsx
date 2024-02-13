// src/components/ToggleDarkMode.tsx
import React, { useState } from 'react';

const ToggleDarkMode: React.FC = ({ setDarkMode, darkMode }: any) => {

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <button onClick={toggleMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ToggleDarkMode;
