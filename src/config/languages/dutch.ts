import type { LanguageConfig } from '../types';

export const dutchConfig: LanguageConfig = {
  articles: ['de', 'het'],
  prepositions: ['van', 'van de', 'van der', 'van den', 'ter'],
  conjunctions: ['en'],
  honorificPrefixes: ['van'],
  lowercaseWords: ['van', 'de', 'den', 'der', 'het', 'ter'],
  apostropheRules: {
    apostrophePrefixes: [],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: false,
  },
};
