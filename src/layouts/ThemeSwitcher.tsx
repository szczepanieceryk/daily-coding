import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const baseClasses = 'rounded-md py-3 px-4';

  return (
    <div className="my-[4rem]">
      <span className="mb-2 block font-medium text-center">
        <strong>Theme Switcher</strong>
      </span>
      <div
        className={`p-4 rounded-md border-2 border-gray-100 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
      >
        <div className="my-4 max-w-[200px] flex flex-wrap justify-between">
          <button
            onClick={() => setTheme('light')}
            className={`${baseClasses} ${theme === 'light' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
          >
            ☀️ Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`${baseClasses}  ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
          >
            🌙 Dark
          </button>
        </div>
        <span>Current Theme: {theme}</span>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
