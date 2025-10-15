import React from 'react';
import useTriviaQuizz from '../../hooks/useTriviaQuizz';
import Button from '../../components/Button';
import AnswerOptions from './AnswerOptions';
import CategorySelect from './CategorySelect';

const QuizForm = () => {
  const {
    question,
    questionCategory,
    options,
    isAnswered,
    correctAnswer,
    selectedAnswer,
    responseMessage,
    errorMessage,
    handleChange,
    handleSelectChange,
    handleSubmit,
  } = useTriviaQuizz();

  return (
    <form onSubmit={handleSubmit}>
      {/* Display category select */}
      <CategorySelect questionCategory={questionCategory} handleSelectChange={handleSelectChange} />

      {/* Display question */}
      {question && (
        <span className="block my-4 p-6 rounded-md bg-gray-700 text-white">{question}</span>
      )}

      {/* Display possible answers */}
      {question && options.length > 0 && (
        <AnswerOptions
          options={options}
          selectedAnswer={selectedAnswer}
          correctAnswer={correctAnswer}
          isAnswered={isAnswered}
          handleChange={handleChange}
        />
      )}

      {/* Display response message */}
      <span className="block font-medium">{responseMessage ? responseMessage : ''}</span>

      {/* Display error message */}
      {errorMessage && <span className="block font-medium text-red-400">{errorMessage}</span>}

      {/* Form submit button */}
      <Button style="primary" type="submit" content="Show Question" />
    </form>
  );
};

export default QuizForm;
