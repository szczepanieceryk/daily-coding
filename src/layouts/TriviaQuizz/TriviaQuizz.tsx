import React from 'react';
import QuizForm from './QuizzForm';

const TriviaQuizz: React.FC = () => {
  return (
    <div className="p-2 md:p-4 mb-[4rem] rounded-lg border-2 border-gray-200 text-center">
      <span className="block">
        <strong>Trivia Quizz</strong>
      </span>
      <QuizForm />
    </div>
  );
};

export default TriviaQuizz;
