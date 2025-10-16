import React from 'react';

interface DifficultySelectProps {
  handleDifficultyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const DifficultySelect: React.FC<DifficultySelectProps> = ({ handleDifficultyChange }) => {
  return (
    <label htmlFor="question-difficulty-id">
      Select difficulty
      <select
        name="question-difficulty"
        id="question-difficulty-id"
        className="block p-2 rounded-md my-2 mx-auto max-w-[350px] cursor-pointer text-center bg-gray-700 text-white"
        onChange={handleDifficultyChange}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </label>
  );
};

export default DifficultySelect;
