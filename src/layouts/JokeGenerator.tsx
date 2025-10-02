import React, { useState } from 'react';
import Button from '../components/Button';

const JokeGenerator = () => {
  const [generatedJoke, setGeneratedJoke] = useState<string>('');
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault;
    setGeneratedJoke('This is generated joke');
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
