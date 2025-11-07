import type { LanguageConfig } from '../types';

export const galicianConfig: LanguageConfig = {
  articles: ['o', 'a', 'os', 'as'],
  prepositions: ['de', 'do', 'da', 'dos', 'das'],
  conjunctions: ['e'],
  honorificPrefixes: [],
  lowercaseWords: ['de', 'do', 'da', 'dos', 'das'],
  apostropheRules: {
    apostrophePrefixes: [],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: false,
  },
};
