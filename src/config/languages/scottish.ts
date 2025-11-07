import type { LanguageConfig } from '../types';

export const scottishConfig: LanguageConfig = {
  articles: ['an', "a'", 'am'],
  conjunctions: [],
  prepositions: ['mac', 'mc', 'nic', 'mhic'],
  honorificPrefixes: ['mac', 'mc', 'nic', 'mhic'],
  lowercaseWords: ['mac', 'mc', 'nic', 'mhic'],
  apostropheRules: {
    apostrophePrefixes: [],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: true,
  },
  knownSurnames: ['macdonald', 'macleod', 'mackenzie', 'mackintosh', 'campbell'],
};
