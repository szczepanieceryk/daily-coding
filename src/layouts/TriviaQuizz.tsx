import React from 'react';
import Button from '../components/Button';
import useTriviaQuizz from '../hooks/useTriviaQuizz';
import { decodeHtmlResponse } from '../utils/helpers';
const TriviaQuizz = () => {
  const {
    question,
    category,
    options,
    selectedAnswer,
    responseMessage,
    errorMessage,
    handleChange,
    handleSubmit,
  } = useTriviaQuizz();

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

        {question && options.length > 0 && (
          <fieldset className="flex flex-wrap justify-center md:justify-between max-w-lg mx-auto my-6">
            {options?.map?.((answer, i) => (
              <label
                htmlFor={`option-${i}`}
                key={`${i}`}
                className={`p-2 my-2 rounded-lg border-2 border-gray-200 hover:border-gray-100 min-w-[200px] hover:bg-gray-300 cursor-pointer ${
                  selectedAnswer === answer
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : 'border-gray-300 bg-gray-100 hover:bg-blue-500 hover:text-white text-black'
                }`}
              >
                <input
                  type="radio"
                  id={`option-${i}`}
                  value={answer}
                  name="quiz-option"
                  checked={selectedAnswer === answer}
                  onChange={handleChange}
                  className="hidden"
                />
                {decodeHtmlResponse(answer)}
              </label>
            )) || []}
          </fieldset>
        )}

        <span className="block h-[20px] font-medium">{responseMessage ? responseMessage : ''}</span>
        {errorMessage && <span className="block font-medium text-red-400">{errorMessage}</span>}
        <Button style="primary" type="submit" content="Show Question" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default TriviaQuizz;
