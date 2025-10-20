import React, { useState } from 'react';
import DifficultySelect from './DifficultySelect';

const MoreOptionsIcon = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className="flex flex-col flex-wrap gap-[5px] absolute -top-2 right-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="h-[5px] w-[5px] rounded-xl bg-white"></div>
        <div className="h-[5px] w-[5px] rounded-xl bg-white"></div>
        <div className="h-[5px] w-[5px] rounded-xl bg-white"></div>
      </div>

      {/* Difficulty Popup */}
      {isOpen && <DifficultySelect />}
    </div>
  );
};

export default MoreOptionsIcon;
