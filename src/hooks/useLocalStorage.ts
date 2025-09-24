import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const useLocalStorage = (key: string, defaultValue: Theme) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting local storage "${key}:"`, error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
