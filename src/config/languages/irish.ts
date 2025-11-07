import type { LanguageConfig } from '../types';

export const irishConfig: LanguageConfig = {
  articles: [],
  prepositions: [],
  conjunctions: [],
  honorificPrefixes: ["o'", 'mc', 'mac'],
  lowercaseWords: [],
  apostropheRules: {
    apostrophePrefixes: ["o'"],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: true,
  },
  knownSurnames: [],
};
