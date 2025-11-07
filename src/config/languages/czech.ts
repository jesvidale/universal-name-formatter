import type { LanguageConfig } from '../types';

export const czechConfig: LanguageConfig = {
  articles: [],
  prepositions: ['z', 'ze', 'v', 've', 'na', 'od', 'do', 'u', 'k', 'ke'],
  conjunctions: ['a', 'i'],
  honorificPrefixes: [],
  lowercaseWords: ['z', 'ze', 'v', 've', 'na', 'od', 'do', 'u', 'k', 'ke'],
  apostropheRules: {
    apostrophePrefixes: [],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: true,
  },
  knownSurnames: [],
};
