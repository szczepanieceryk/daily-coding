import React from 'react';
import ThemeSwitch from '../components/ThemeSwitch';
import { ThemeProps } from '../types/types';
const ThemeSwitcher: React.FC<ThemeProps> = ({ theme, setTheme }) => {
  return (
    <div
      className={`mb-[4rem] p-4 rounded-lg border-2 border-gray-200 ${theme === 'dark' ? 'bg-gray-900 text-white border-gray-100' : 'bg-white text-gray-900'}`}
    >
      <span className="mb-2 block font-medium text-center">
        <strong>Theme Switcher</strong>
      </span>
      <ThemeSwitch theme={theme} setTheme={setTheme} />
      <span>Current Theme: {theme}</span>
    </div>
  );
};

export default ThemeSwitcher;
