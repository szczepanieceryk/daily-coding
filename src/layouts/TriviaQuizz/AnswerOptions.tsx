import React from 'react';
import { decodeHtmlResponse } from '../../utils/helpers';

interface AnswerOptionsProps {
  options: string[];
  selectedAnswer: string;
  correctAnswer: string;
  isAnswered: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  options,
  selectedAnswer,
  correctAnswer,
  isAnswered,
  handleChange,
}) => {
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
    <fieldset className="flex flex-wrap justify-center md:justify-between max-w-lg mx-auto my-6">
      {options?.map?.((answer: string, i: number) => (
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
  );
};

export default AnswerOptions;
