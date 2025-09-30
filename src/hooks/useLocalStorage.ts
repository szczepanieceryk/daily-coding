import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useLocalStorage = (
  key: string,
  defaultValue: string,
): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState<string>(() => {
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
