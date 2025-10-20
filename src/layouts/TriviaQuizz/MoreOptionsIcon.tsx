import React, { useRef, useEffect } from 'react';
import DifficultySelect from './DifficultySelect';

interface MoreOptionsIconProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MoreOptionsIcon: React.FC<MoreOptionsIconProps> = ({ isOpen, setIsOpen }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={popupRef}>
      <div
        className="flex flex-col flex-wrap gap-[5px] absolute -top-2 right-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="h-[5px] w-[5px] rounded-xl bg-white"></div>
        <div className="h-[5px] w-[5px] rounded-xl bg-white"></div>
        <div className="h-[5px] w-[5px] rounded-xl bg-white"></div>
      </div>

      {/* Difficulty Popup */}
      {isOpen && <DifficultySelect isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default MoreOptionsIcon;
