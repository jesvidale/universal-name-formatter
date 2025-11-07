import type { LanguageConfig } from '../types';

export const swedishConfig: LanguageConfig = {
  articles: ['en', 'ett', 'den', 'det', 'de'],
  prepositions: ['av', 'från', 'till', 'på'],
  conjunctions: ['och'],
  honorificPrefixes: [],
  lowercaseWords: ['av', 'från', 'till', 'på'],
  apostropheRules: {
    apostrophePrefixes: [],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: true,
  },
  knownSurnames: ['af', 'von', 'de'],
};
