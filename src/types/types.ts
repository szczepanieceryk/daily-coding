export interface Config {
  appVersion: string;
}

export type Theme = 'light' | 'dark';

export interface ThemeProps {
  theme: Theme | string;
  setTheme: (value: Theme) => void;
}

export type CharacterRouteParams = { params: { id: string } };
