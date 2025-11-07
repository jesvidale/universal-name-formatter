import type { LanguageConfig } from '../types';

export const polishConfig: LanguageConfig = {
  articles: [], // Polish doesn't use articles
  prepositions: ['z', 'ze', 'w', 'we', 'na', 'od', 'do', 'u'],
  conjunctions: ['a', 'i'],
  honorificPrefixes: [],
  lowercaseWords: ['z', 'ze', 'w', 'we', 'na', 'od', 'do', 'u'],
  apostropheRules: {
    apostrophePrefixes: [],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: true,
  },
  knownSurnames: ['nowak', 'kowalski', 'wiśniewski', 'wójcik', 'kowalczyk'],
};
