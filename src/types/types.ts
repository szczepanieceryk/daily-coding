export type Theme = 'light' | 'dark';

export interface ThemeProps {
  theme: Theme | string;
  setTheme: (value: Theme) => void;
}

export type DifficultyContextType = {
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
};
