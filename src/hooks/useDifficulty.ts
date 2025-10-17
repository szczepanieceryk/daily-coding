import { useContext } from 'react';
import { DifficultyContext } from '../App';

export const useDifficulty = () => {
  const context = useContext(DifficultyContext);
  if (context === undefined) {
    throw new Error('useDifficulty has to be called inside DifficultyContext.Provider');
  }
  return context;
};
