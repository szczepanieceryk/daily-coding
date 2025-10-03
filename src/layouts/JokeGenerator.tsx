import React from 'react';
import Button from '../components/Button';
import { useJokeGenerator } from '../hooks/useJokeGenerator';

const JokeGenerator = () => {
  const { generatedJoke, errorMessage, handleSubmit } = useJokeGenerator();

  return (
    <div className="p-2 md:p-4 rounded-lg border-2 border-gray-200 text-center">
      <form onSubmit={handleSubmit}>
        <span className="block">
          <strong>Joke generator</strong>
        </span>

        <div className="my-2 p-2 h-24 rounded-lg flex items-center justify-center bg-gray-700 text-white">
          <span className="block my-4">
            {generatedJoke ? generatedJoke : 'Are you ready for some dad jokes ?'}
          </span>
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
