import React from 'react';
import { useDifficulty } from '../../hooks/useDifficulty';

const difficultyLevels = ['easy', 'medium', 'hard'];

const DifficultySelect: React.FC = () => {
  const { difficulty, setDifficulty } = useDifficulty();

  return (
    <div className="p-4 absolute top-0 left-1/2 -translate-x-1/2 border-2 rounded-lg w-[300px] mx-auto border-gray-200 bg-gray-900">
      <label htmlFor="question-difficulty-id">
        Select question difficulty
        <select
          name="question-difficulty"
          id="question-difficulty-id"
          className="block p-2 rounded-md my-2 mx-auto max-w-[350px] cursor-pointer text-center bg-gray-700 text-white"
          onChange={(e) => setDifficulty(e.target.value)}
          value={difficulty}
        >
          {difficultyLevels?.map?.((lvl) => (
            <option key={lvl} value={lvl}>
              {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default DifficultySelect;
