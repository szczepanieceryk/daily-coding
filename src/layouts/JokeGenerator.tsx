import React, { useState } from 'react';
import Button from '../components/Button';

interface FormResponse {
  id: string;
  joke: string;
  status: number;
}

const JokeGenerator = () => {
  const [generatedJoke, setGeneratedJoke] = useState<string>('');
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      const response: Response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: FormResponse = await response.json();
      setGeneratedJoke(data.joke);
    } catch (error) {
      console.log(`Error: ${error}`);
      console.error(`Error during joke generation: ${error}`);
    }
  };
  return (
    <div className="p-4 rounded-lg border-2 border-gray-200 text-center">
      <form onSubmit={handleSubmit}>
        <span className="block">
          <strong>Joke generator</strong>
        </span>

        {generatedJoke && <span className="block my-4">{generatedJoke}</span>}

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
