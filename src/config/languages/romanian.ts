import type { LanguageConfig } from '../types';

export const romanianConfig: LanguageConfig = {
  articles: ['cel', 'cea', 'cei', 'cele'],
  prepositions: ['din', 'de', 'la', 'către', 'spre', 'cu'],
  conjunctions: ['și'],
  honorificPrefixes: [],
  lowercaseWords: ['din', 'de', 'la', 'către', 'spre', 'cu'],
  apostropheRules: {
    apostrophePrefixes: [],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: false,
  },
};
