import type { LanguageConfig } from '../types';

export const spanishConfig: LanguageConfig = {
  articles: ['el', 'la', 'los', 'las'],
  prepositions: ['de', 'del', 'de la', 'de los', 'de las'],
  conjunctions: ['y', 'e'],
  honorificPrefixes: ['san', 'santo', 'santa'],
  lowercaseWords: ['y', 'e', 'i', 'o', 'u'],
  apostropheRules: {
    apostrophePrefixes: [],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: false,
  },
};
