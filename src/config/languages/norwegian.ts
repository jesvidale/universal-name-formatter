import type { LanguageConfig } from '../types';

export const norwegianConfig: LanguageConfig = {
  articles: ['en', 'et', 'den', 'det', 'de'],
  prepositions: ['fra', 'til', 'på'],
  conjunctions: ['og'],
  honorificPrefixes: [],
  lowercaseWords: ['fra', 'til', 'på'],
  apostropheRules: {
    apostrophePrefixes: [],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: true,
  },
  knownSurnames: ['av'],
};
