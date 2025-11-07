import type { LanguageConfig } from '../types';

export const germanConfig: LanguageConfig = {
  articles: ['der', 'die', 'das'],
  prepositions: ['von', 'zu', 'zum', 'zur', 'von der'],
  conjunctions: ['und'],
  honorificPrefixes: ['von', 'zu'],
  lowercaseWords: ['von', 'zu', 'zum', 'zur'],
  apostropheRules: {
    apostrophePrefixes: [],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: false,
  },
};
