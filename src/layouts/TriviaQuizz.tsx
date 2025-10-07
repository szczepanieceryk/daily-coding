import React from 'react';
import Button from '../components/Button';
import useTriviaQuizz from '../hooks/useTriviaQuizz';

const TriviaQuizz = () => {
  const { question, category, options, selectedAnswer, handleChange, handleSubmit } =
    useTriviaQuizz();

  return (
    <div className="p-2 md:p-4 my-[4rem] rounded-lg border-2 border-gray-200 text-center">
      <span className="block">
        <strong>Trivia Quizz</strong>
      </span>

      <form onSubmit={handleSubmit}>
        {category && (
          <span className="block mb-4">
            <strong>Category</strong>: {category}
          </span>
        )}

        {question && (
          <span className="block my-4 p-6 rounded-md bg-gray-700 text-white">{question}</span>
        )}

        {options.length > 0 && (
          <fieldset className="flex flex-wrap justify-center md:justify-between max-w-lg mx-auto my-6">
            {options?.map?.((answer, i) => (
              <label
                htmlFor={`option-${i}`}
                key={`${i}`}
                className="p-2 my-2 rounded-lg border-2 border-gray-200 hover:border-gray-100 min-w-[200px] hover:bg-gray-300 cursor-pointer"
              >
                <input
                  type="radio"
                  id={`option-${i}`}
                  value={answer}
                  name="quiz-option"
                  checked={selectedAnswer === answer}
                  onChange={handleChange}
                />
                {answer}
              </label>
            ))}
          </fieldset>
        )}
        <Button style="primary" type="submit" content="Show Question" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default TriviaQuizz;
