import React from 'react';
import useTriviaQuizz from '../../hooks/useTriviaQuizz';
import { decodeHtmlResponse } from '../../utils/helpers';
import Button from '../../components/Button';

const QuizForm = () => {
  const {
    question,
    questionCategory,
    options,
    selectedAnswer,
    correctAnswer,
    isAnswered,
    responseMessage,
    errorMessage,
    handleChange,
    handleSelectChange,
    handleSubmit,
  } = useTriviaQuizz();

  const getOptionClassName = (answer: string): string => {
    const baseClasses =
      'p-2 my-2 rounded-lg border-2 min-w-[200px] cursor-pointer transition-colors';

    // if user still didn't answerd
    if (!isAnswered) {
      return `${baseClasses} ${
        selectedAnswer === answer
          ? 'border-blue-500 bg-blue-500 text-white'
          : 'border-gray-300 bg-gray-100 hover:bg-blue-500 hover:text-white text-black'
      }`;
    }

    // After answer show appropraite color
    if (answer === correctAnswer) {
      // Correct answer - green
      return `${baseClasses} border-green-500 bg-green-500 text-white`;
    } else if (answer === selectedAnswer) {
      // Wrong answer - red
      return `${baseClasses} border-red-500 bg-red-500 text-white`;
    } else {
      // Disabled options - gray
      return `${baseClasses} border-gray-300 bg-gray-200 text-gray-500`;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="question-category-id" className="block">
        Select category :
        <select
          name="question-category"
          id="question-category-id"
          className="block p-2 rounded-md my-2 mx-auto max-w-[350px] cursor-pointer text-center bg-gray-700 text-white"
          onChange={handleSelectChange}
        >
          <option value="any">Random</option>
          {Object.entries(questionCategory).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>

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
      <Button
        style="primary"
        type="submit"
        content="Show Question"
        onClick={() => console.log('Form Submit')}
      />
    </form>
  );
};

export default QuizForm;
