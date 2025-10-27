import React, { createContext } from 'react';
import NewsletterForm from './layouts/NewsletterForm';
import AutoCompleateSearch from './layouts/AutoCompleteSearch';
import useLocalStorage from './hooks/useLocalStorage';
import ThemeSwitch from './components/ThemeSwitch';
import ThemeSwitcher from './layouts/ThemeSwitcher';
import JokeGenerator from './layouts/JokeGenerator';
import TriviaQuizz from './layouts/TriviaQuizz/TriviaQuizz';

type DifficultyContextType = {
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
};

export const DifficultyContext = createContext<DifficultyContextType | undefined>(undefined);

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [difficulty, setDifficulty] = useLocalStorage('difficulty', 'easy');

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

        <span className="block text-center">
          <strong className="block mt-[3em] mb-[2em]">
            Newsletter form with validation and mockup API call
          </strong>
        </span>
        {/* Newsletter Form */}
        <NewsletterForm />

        <span className="block text-center">
          <strong className="block mt-[4em] mb-[2em]">
            Search with Auto complete and optimized API calls logic
          </strong>
        </span>
        <AutoCompleateSearch />

        <span className="block text-center">
          <strong className="block mt-[4em] mb-[2em]">
            ThemeSwitcher with Local storage state
          </strong>
        </span>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <JokeGenerator />

        <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
          <TriviaQuizz />
        </DifficultyContext.Provider>
      </div>
    </div>
  );
};

export default App;
