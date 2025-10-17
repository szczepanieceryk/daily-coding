import React from 'react';
import { useDifficulty } from '../../hooks/useDifficulty';

const difficultyLevels = ['easy', 'medium', 'hard'];

const DifficultySelect: React.FC = () => {
  const { difficulty, setDifficulty } = useDifficulty();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDifficulty = e.target.value;
    setDifficulty(selectedDifficulty);
  };

  return (
    <label htmlFor="question-difficulty-id">
      Select difficulty
      <select
        name="question-difficulty"
        id="question-difficulty-id"
        className="block p-2 rounded-md my-2 mx-auto max-w-[350px] cursor-pointer text-center bg-gray-700 text-white"
        onChange={handleChange}
        value={difficulty}
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
