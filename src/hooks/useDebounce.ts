import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: number): string => {
  const [debounceValue, setDebounceValue] = useState<string>('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearInterval(handler);
    };
  }, [value, delay]);

  return debounceValue;
};
