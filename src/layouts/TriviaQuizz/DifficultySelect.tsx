import React from 'react';

interface DifficultySelectProps {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const difficultyLevels = ['easy', 'medium', 'hard'];

const DifficultySelect: React.FC<DifficultySelectProps> = ({ handleChange }) => {
  return (
    <label htmlFor="question-difficulty-id">
      Select difficulty
      <select
        name="question-difficulty"
        id="question-difficulty-id"
        className="block p-2 rounded-md my-2 mx-auto max-w-[350px] cursor-pointer text-center bg-gray-700 text-white"
        onChange={handleChange}
      >
        {difficultyLevels?.map?.((lvl) => (
          <option key={lvl} value={lvl}>
            {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default DifficultySelect;
