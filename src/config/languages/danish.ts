import type { LanguageConfig } from '../types';

export const danishConfig: LanguageConfig = {
  articles: ['en', 'et', 'den', 'det', 'de'],
  prepositions: ['af', 'fra', 'til', 'på'],
  conjunctions: ['og'],
  honorificPrefixes: [],
  lowercaseWords: ['af', 'fra', 'til', 'på'],
  apostropheRules: {
    apostrophePrefixes: [],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: true,
  },
  knownSurnames: ['af'],
};
