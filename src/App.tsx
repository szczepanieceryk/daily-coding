import React from 'react';
import Button from './components/Button';
import NewsletterForm from './layouts/NewsletterForm';
import AutoCompleateSearch from './layouts/AutoCompleteSearch';
import useLocalStorage from './hooks/useLocalStorage';
import ThemeSwitch from './components/ThemeSwitch';
// import ThemeSwitcher from './layouts/ThemeSwitcher';
const App = () => {
  const handleClick = () => console.log('Button clicked!');

  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <div
      className={`max-w-8xl p-4 mb-4 mx-auto  rounded-lg shadow-sm ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="flex flex-wrap justify-end">
        <ThemeSwitch theme={theme} setTheme={setTheme} />
      </div>

      <div className="max-w-xl mx-auto">
        <h1 className="text-xl font-bold text-center">🚀 Daily codeing project</h1>
        <span className="block text-center">
          Here I add small parts of code, everyday, from 10 to 15min{' '}
        </span>

        <span className="block my-[2em]">
          <strong>Components:</strong>
        </span>

        <span className="block text-center">
          <strong>Buttons</strong>
        </span>
        <div className="my-[1em] flex flex-nowrap justify-between max-w-[550px] mx-auto">
          {/* Primary button */}
          <Button content="Primary button" style="primary" onClick={handleClick} type="button" />

          {/* Secondary button */}
          <Button
            content="Secondary button"
            style="secondary"
            onClick={handleClick}
            type="button"
          />

          {/* Disabled button */}
          <Button
            content="Disabled button"
            style="primary"
            onClick={handleClick}
            type="button"
            disabled={true}
          />
        </div>

        <span className="block mt-[4em]">
          <strong>Code snipets with functionality:</strong>
        </span>

        <span className="block text-center">
          <strong className="block mt-[3em] mb-[2em]">Newsletter form with validation</strong>
        </span>
        {/* Newsletter Form */}
        <NewsletterForm />
        <AutoCompleateSearch />
        {/* <ThemeSwitcher /> */}
      </div>
    </div>
  );
};

export default App;
