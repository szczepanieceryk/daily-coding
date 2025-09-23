import React, { useState } from 'react';

type Theme = 'light' | 'dark';

const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  const buttonThemes: Record<Theme, string> = {
    light: 'bg-blue-500 text-white',
    dark: 'bg-gray-800 text-white',
  };

  const buttonStyles = buttonThemes[currentTheme];
  const baseClasses = 'rounded-md py-3 px-4 bg-gray-200';
  const buttonClasses = `${baseClasses} ${buttonStyles}`;

  const handleClick = () => {
    setCurrentTheme('dark');
  };
  return (
    <div className="my-6 p-4 rounded-md border-2 border-gray-100">
      <span className="block font-medium">Theme Switcher</span>
      <div className="mt-4 max-w-[200px] flex flex-wrap justify-between">
        <button onClick={handleClick} className={buttonClasses}>
          ☀️ Light
        </button>
        <button onClick={handleClick} className={buttonClasses}>
          🌙 Dark
        </button>
      </div>
      <span>Current Theme: {currentTheme}</span>
    </div>
  );
};

export default ThemeSwitcher;
