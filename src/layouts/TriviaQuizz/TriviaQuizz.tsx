import React from 'react';
import QuizForm from './QuizzForm';

const TriviaQuizz = () => {
  return (
    <div className="p-2 md:p-4 my-[4rem] rounded-lg border-2 border-gray-200 text-center">
      <span className="block">
        <strong>Trivia Quizz</strong>
      </span>
      <QuizForm />
    </div>
  );
};

export default TriviaQuizz;
