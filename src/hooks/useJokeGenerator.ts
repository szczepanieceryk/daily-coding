import React, { useState } from 'react';

interface FormResponse {
  id: string;
  joke: string;
  status: number;
}

export const useJokeGenerator = () => {
  const [generatedJoke, setGeneratedJoke] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const response: Response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        setErrorMessage('No jokes for now :( ... please try later ');
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: FormResponse = await response.json();

      setGeneratedJoke(data.joke);
    } catch (error) {
      setErrorMessage('No jokes for now :( ... please try later');
      console.log(`Error: ${error}`);
      console.error(`Error during joke generation: ${error}`);
    }
  };

  return { generatedJoke, errorMessage, handleSubmit };
};
