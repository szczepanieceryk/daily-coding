export interface Config {
  appVersion: string;
}

export type Theme = 'light' | 'dark';

export type CharacterRouteParams = { params: { id: string } };
