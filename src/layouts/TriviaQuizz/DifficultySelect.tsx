import React from 'react';
import { useDifficulty } from '../../hooks/useDifficulty';

const difficultyLevels = ['easy', 'medium', 'hard'];
interface DifficultySelectProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const DifficultySelect: React.FC<DifficultySelectProps> = ({ isOpen, setIsOpen }) => {
  const { difficulty, setDifficulty } = useDifficulty();

  return (
    <div className="py-8 px-4 absolute top-0 left-1/2 -translate-x-1/2 border-2 rounded-lg w-[300px] mx-auto border-gray-200 bg-gray-900">
      <div className="relative">
        <div
          className="absolute -top-6 -right-2 w-8 h-8 border-2 border-gray-200 rounded-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          x
        </div>

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
    </div>
  );
};

export default DifficultySelect;
