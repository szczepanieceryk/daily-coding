import React from 'react';
import { Theme } from '../types/types';

interface ThemeProps {
  theme: Theme | string;
  setTheme: (value: Theme) => void;
}

const ThemeSwitch: React.FC<ThemeProps> = ({ theme, setTheme }) => {
  const baseClasses = 'py-3 px-4';

  return (
    <div
      className={`p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="my-4 max-w-[200px] flex flex-wrap justify-between">
        <button
          onClick={() => setTheme('light')}
          className={`${baseClasses} ${theme === 'light' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} rounded-s-lg`}
        >
          ☀️ Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`${baseClasses}  ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} rounded-r-lg`}
        >
          🌙 Dark
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitch;
