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
    correctAnswer,
    isAnswered,
    responseMessage,
    errorMessage,
    handleChange,
    handleSubmit,
  } = useTriviaQuizz();

  const getOptionClassName = (answer: string) => {
    const baseClasses =
      'p-2 my-2 rounded-lg border-2 min-w-[200px] cursor-pointer transition-colors';

    // Jeśli użytkownik jeszcze nie odpowiedział
    if (!isAnswered) {
      return `${baseClasses} ${
        selectedAnswer === answer
          ? 'border-blue-500 bg-blue-500 text-white'
          : 'border-gray-300 bg-gray-100 hover:bg-blue-500 hover:text-white text-black'
      }`;
    }

    // Po odpowiedzi - pokaż kolory
    if (answer === correctAnswer) {
      // Poprawna odpowiedź zawsze na zielono
      return `${baseClasses} border-green-500 bg-green-500 text-white`;
    } else if (answer === selectedAnswer) {
      // Wybrana zła odpowiedź na czerwono
      return `${baseClasses} border-red-500 bg-red-500 text-white`;
    } else {
      // Pozostałe nieaktywne
      return `${baseClasses} border-gray-300 bg-gray-200 text-gray-500`;
    }
  };

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
              <label htmlFor={`option-${i}`} key={`${i}`} className={getOptionClassName(answer)}>
                <input
                  type="radio"
                  id={`option-${i}`}
                  value={answer}
                  name="quiz-option"
                  checked={selectedAnswer === answer}
                  disabled={isAnswered}
                  onChange={handleChange}
                  className="hidden"
                />
                {decodeHtmlResponse(answer)}
              </label>
            )) || []}
          </fieldset>
        )}

        <span className="block font-medium">{responseMessage ? responseMessage : ''}</span>
        {errorMessage && <span className="block font-medium text-red-400">{errorMessage}</span>}
        <Button style="primary" type="submit" content="Show Question" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default TriviaQuizz;
