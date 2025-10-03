import React, { useState } from 'react';
import Button from '../components/Button';

interface FormResponse {
  id: string;
  joke: string;
  status: number;
}

const JokeGenerator = () => {
  const [generatedJoke, setGeneratedJoke] = useState<string>('Are you ready for some dad jokes ?');
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
  return (
    <div className="p-2 md:p-4 rounded-lg border-2 border-gray-200 text-center">
      <form onSubmit={handleSubmit}>
        <span className="block">
          <strong>Joke generator</strong>
        </span>

        <div className="my-2 p-2 h-24 rounded-lg flex items-center justify-center bg-gray-700 text-white">
          <span className="block my-4">{generatedJoke && <span>{generatedJoke}</span>}</span>
        </div>

        {errorMessage && <small className="block text-red-600">{errorMessage}</small>}

        <Button
          content={`${generatedJoke ? 'Another one' : 'Tell me a joke'}`}
          style="primary"
          type="submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default JokeGenerator;
